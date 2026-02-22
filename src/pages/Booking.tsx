import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Mail, MessageCircle, User, Send, Globe, Package, Hotel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { safariPackages, countries } from '@/data/safariPackages';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaymentMethods from '@/components/PaymentMethods';

const Booking = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const preselectedPackage = searchParams.get('package') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    nationality: '',
    selectedPackage: preselectedPackage,
    adults: '',
    children: '',
    accommodation: '',
    specialRequests: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({ title: 'Please enter your name', variant: "destructive" });
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({ title: 'Please enter a valid email', variant: "destructive" });
      return false;
    }
    if (!formData.phone.trim()) {
      toast({ title: 'Please enter your phone number', variant: "destructive" });
      return false;
    }
    if (!formData.nationality) {
      toast({ title: 'Please select your nationality', variant: "destructive" });
      return false;
    }
    if (!formData.selectedPackage) {
      toast({ title: 'Please select a package', variant: "destructive" });
      return false;
    }
    return true;
  };

  const getSelectedPackageDetails = () => {
    return safariPackages.find(p => p.title === formData.selectedPackage) || null;
  };

  const generateBookingMessage = () => {
    const pkg = getSelectedPackageDetails();
    return `
SAFARI BOOKING REQUEST
=====================

TRIP DETAILS
------------
Package: ${pkg?.title || formData.selectedPackage}
Duration: ${pkg?.duration || 'N/A'}
Location: ${pkg?.location || 'N/A'}
Price: ${pkg?.price || 'N/A'}
Adults: ${formData.adults || 'Not specified'}
Children: ${formData.children || 'None'}
Accommodation: ${formData.accommodation || 'Not specified'}

PERSONAL DETAILS
----------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Nationality: ${formData.nationality}

Special Requests:
${formData.specialRequests || 'None'}
    `.trim();
  };

  const handleEmailSubmit = () => {
    if (!validateForm()) return;
    setIsSubmitting(true);
    const subject = encodeURIComponent(`Safari Booking Request: ${formData.selectedPackage}`);
    const body = encodeURIComponent(generateBookingMessage());
    window.location.href = `mailto:gokyletours@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: t('booking.emailOpened'), description: t('booking.emailOpenedDesc') });
    setIsSubmitting(false);
  };

  const handleWhatsAppSubmit = () => {
    if (!validateForm()) return;
    const message = encodeURIComponent(generateBookingMessage());
    window.open(`https://wa.me/254742196613?text=${message}`, '_blank');
    toast({ title: t('booking.whatsappOpened'), description: t('booking.whatsappOpenedDesc') });
  };

  const pkgDetails = getSelectedPackageDetails();

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 pt-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-3">{t('booking.title')}</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            Fill in your details below and choose how you'd like to submit your booking.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">

          {/* Personal Details */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-2">
              <User size={22} className="text-safari" />
              Personal Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                <Input name="name" placeholder="Your full name" value={formData.name} onChange={handleInputChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                <Input name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleInputChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                <Input name="phone" placeholder="+1 234 567 8900" value={formData.phone} onChange={handleInputChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Nationality *</label>
                <Select value={formData.nationality} onValueChange={(v) => handleSelectChange('nationality', v)}>
                  <SelectTrigger className="w-full">
                    <Globe className="w-4 h-4 mr-2 text-muted-foreground" />
                    <SelectValue placeholder="Select nationality" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Trip Details */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-2">
              <Package size={22} className="text-safari" />
              Trip Details
            </h2>

            {/* Package */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-foreground mb-1.5">Safari Package *</label>
              <Select value={formData.selectedPackage} onValueChange={(v) => handleSelectChange('selectedPackage', v)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a safari package" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">Day Excursions</div>
                  {safariPackages.filter(p => p.category === 'excursion').map((pkg) => (
                    <SelectItem key={pkg.id} value={pkg.title}>{pkg.title} - {pkg.price}</SelectItem>
                  ))}
                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground mt-2">Jeep Safaris</div>
                  {safariPackages.filter(p => p.category === 'jeep-safari').map((pkg) => (
                    <SelectItem key={pkg.id} value={pkg.title}>{pkg.title} - {pkg.price}</SelectItem>
                  ))}
                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground mt-2">Fly-in Safaris</div>
                  {safariPackages.filter(p => p.category === 'fly-in-safari').map((pkg) => (
                    <SelectItem key={pkg.id} value={pkg.title}>{pkg.title} - {pkg.price}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Selected package info */}
            {pkgDetails && (
              <div className="bg-secondary/30 rounded-xl p-4 mb-5">
                <p className="font-medium text-foreground">{pkgDetails.title}</p>
                <p className="text-sm text-muted-foreground">{pkgDetails.duration} · {pkgDetails.location} · {pkgDetails.price}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Number of Adults</label>
                <Input name="adults" type="number" min="1" placeholder="e.g. 2" value={formData.adults} onChange={handleInputChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Number of Children</label>
                <Input name="children" type="number" min="0" placeholder="e.g. 0" value={formData.children} onChange={handleInputChange} />
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-sm font-medium text-foreground mb-1.5">Accommodation Preference</label>
              <Select value={formData.accommodation} onValueChange={(v) => handleSelectChange('accommodation', v)}>
                <SelectTrigger className="w-full">
                  <Hotel className="w-4 h-4 mr-2 text-muted-foreground" />
                  <SelectValue placeholder="Select accommodation type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="budget">Budget / Camping</SelectItem>
                  <SelectItem value="mid-range">Mid-Range Lodge</SelectItem>
                  <SelectItem value="luxury">Luxury Lodge / Tented Camp</SelectItem>
                  <SelectItem value="premium">Premium / 5-Star Resort</SelectItem>
                  <SelectItem value="flexible">Flexible / No Preference</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-5">
              <label className="block text-sm font-medium text-foreground mb-1.5">Special Requests</label>
              <Textarea
                name="specialRequests"
                placeholder="Any special requirements, dietary needs, preferred dates, or additional information..."
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows={4}
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <p className="text-sm text-muted-foreground text-center mb-6">
              Choose how you'd like to submit your booking request:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleEmailSubmit}
                disabled={isSubmitting}
                className="flex-1 h-14 text-base bg-primary hover:bg-primary/90"
              >
                <Mail size={20} />
                Submit via Email
              </Button>
              <Button
                onClick={handleWhatsAppSubmit}
                className="flex-1 h-14 text-base bg-[#25D366] hover:bg-[#128C7E] text-white"
              >
                <MessageCircle size={20} />
                Submit via WhatsApp
              </Button>
            </div>
          </div>

        </div>
      </section>

      <PaymentMethods />
      <Footer />
    </div>
  );
};

export default Booking;
