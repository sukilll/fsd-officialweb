-- Create use_cases table
CREATE TABLE public.use_cases (
  id TEXT NOT NULL PRIMARY KEY,
  title TEXT NOT NULL,
  image TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.use_cases ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Anyone can view use cases" 
ON public.use_cases 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_use_cases_updated_at
BEFORE UPDATE ON public.use_cases
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data
INSERT INTO public.use_cases (id, title, image, icon_name, description) VALUES
('edge-ios-extension', 'Edge iOS extension', 'https://xgforkvofgdxvngaqalj.supabase.co/storage/v1/object/sign/usecase/example.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMGE0YTk1My0wMmMxLTRmYTMtOGM2OS1lNmNlMzQwZDA1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VjYXNlL2V4YW1wbGUucG5nIiwiaWF0IjoxNzUxMzU3MTg0LCJleHAiOjE3ODI4OTMxODR9.LVGhimjv4VoAVWjxDQFqZVvurvvcLjhXExjtiFAsDF0', 'Code', 'FSD supported the development of an iOS extension for Edge browser, enabling seamless Figma-to-code conversion. We helped build the extension''s interface, including a clean and efficient list view to manage design exports.'),
('edge-fre', 'Edge FRE pages', 'https://xgforkvofgdxvngaqalj.supabase.co/storage/v1/object/sign/usecase/FSD%20banner.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMGE0YTk1My0wMmMxLTRmYTMtOGM2OS1lNmNlMzQwZDA1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VjYXNlL0ZTRCBiYW5uZXIucG5nIiwiaWF0IjoxNzUxMzY0OTA1LCJleHAiOjE3ODI5MDA5MDV9.H2A-xTI_f7VIE4CfNEj0A_OayItVjsbvnL8l42ZiLyc', 'Palette', 'Provided significant assistance with the onboarding page of EdgeMobile''s FSD, delivering an exceptional implementation that closely matched the design mockups to code with high fidelity and attention to detail.'),
('frontend-acceleration', 'Edge Readingmode migration', 'https://xgforkvofgdxvngaqalj.supabase.co/storage/v1/object/sign/usecase/WechatIMG64.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMGE0YTk1My0wMmMxLTRmYTMtOGM2OS1lNmNlMzQwZDA1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VjYXNlL1dlY2hhdElNRzY0LmpwZyIsImlhdCI6MTc1MTYwOTEyMSwiZXhwIjoxNzgzMTQ1MTIxfQ.drycZGhL-ddW5RcxmxwFx7lf_eLdo-4SUcbCgOje73o', 'Zap', 'FSD helped migrate the desktop reading mode from the original Web UI to WebUI2, significantly reducing manual effort.'),
('landing-pages', 'Edge History migration', 'https://xgforkvofgdxvngaqalj.supabase.co/storage/v1/object/sign/usecase/WechatIMG66.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMGE0YTk1My0wMmMxLTRmYTMtOGM2OS1lNmNlMzQwZDA1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VjYXNlL1dlY2hhdElNRzY2LmpwZyIsImlhdCI6MTc1MTYwOTQ5MCwiZXhwIjoxNzgzMTQ1NDkwfQ.Ci6cCnAUcLd8qRB4R6MXErYImDpuzDMLvO17lCO-fHQ', 'Globe', 'FSD helped migrate the Edge history page from the original Web UI to WebUI2, significantly reducing manual effort.');