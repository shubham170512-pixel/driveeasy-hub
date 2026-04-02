
-- Contact submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions FOR INSERT
  WITH CHECK (true);

-- Bookings table
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  car_id TEXT NOT NULL,
  car_name TEXT NOT NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  pickup TEXT NOT NULL,
  drop_location TEXT,
  trip_date DATE NOT NULL,
  distance INTEGER NOT NULL,
  fare NUMERIC NOT NULL,
  status TEXT NOT NULL DEFAULT 'confirmed',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create a booking"
  ON public.bookings FOR INSERT
  WITH CHECK (true);
