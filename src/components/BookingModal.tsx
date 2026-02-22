import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, MessageCircle, User, Phone, Calendar, Users, Send, Globe, Package, Hotel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { safariPackages, countries } from '@/data/safariPackages';

interface PackageDetails {
  title: string;
  duration: string;
  location: string;
  price: string;
  highlights: string[];
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageDetails?: PackageDetails;
}

const BookingModal = ({ isOpen, onClose, packageDetails }: BookingModalProps) => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    nationality: '',
    selectedPackage: packageDetails?.title || '',
    adults: '',
    children: '',
    accommodation: '',
    specialRequests: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    if (!formData.selectedPackage && !packageDetails) {
      toast({ title: 'Please select a package', variant: "destructive" });
      return false;
    }
    return true;
  };

  const getSelectedPackageDetails = () => {
    if (packageDetails) return packageDetails;
    const pkg = safariPackages.find(p => p.title === formData.selectedPackage);
    if (pkg) {
      return {
        title: pkg.title,
        duration: pkg.duration,
        location: pkg.location,
        price: pkg.price,
        highlights: pkg.highlights,
      };
    }
    return null;
  };

  const generateBookingMessage = () => {
    const pkgDetails = getSelectedPackageDetails();
    
    return `
SAFARI BOOKING REQUEST
=====================

TRIP DETAILS
------------
Package: ${pkgDetails?.title || formData.selectedPackage}
Duration: ${pkgDetails?.duration || 'N/A'}
Location: ${pkgDetails?.location || 'N/A'}
Price: ${pkgDetails?.price || 'N/A'}
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

  const handleSubmit = () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    const subject = encodeURIComponent(`Safari Booking Request: ${formData.selectedPackage || packageDetails?.title}`);
    const body = encodeURIComponent(generateBookingMessage());
    
    window.location.href = `mailto:gokyletours@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: t('booking.emailOpened'),
      description: t('booking.emailOpenedDesc'),
    });
    
    setIsSubmitting(false);
    onClose();
  };

  const handleWhatsAppBooking = () => {
    if (!validateForm()) return;

    const message = encodeURIComponent(generateBookingMessage());
    window.open(`https://wa.me/254742196613?text=${message}`, '_blank');
    
    toast({
      title: t('booking.whatsappOpened'),
      description: t('booking.whatsappOpenedDesc'),
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[90vh] bg-card shadow-2xl z-50 overflow-hidden flex flex-col md:rounded-2xl"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 md:p-6 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl mb-1">{t('booking.title')}</h2>
                  <p className="text-primary-foreground/80 text-sm">
                    {packageDetails?.title || t('booking.selectPackage')}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 min-h-0">
              {/* PERSONAL DETAILS */}
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4 text-lg flex items-center gap-2">
                  <User size={18} className="text-safari" />
                  Personal Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                    <Input
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      maxLength={255}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                    <Input
                      name="phone"
                      placeholder="+1 234 567 8900"
                      value={formData.phone}
                      onChange={handleInputChange}
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Nationality *</label>
                    <Select
                      value={formData.nationality}
                      onValueChange={(value) => handleSelectChange('nationality', value)}
                    >
                      <SelectTrigger className="w-full">
                        <Globe className="w-4 h-4 mr-2 text-muted-foreground" />
                        <SelectValue placeholder="Select nationality" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* TRIP DETAILS */}
              <div>
                <h3 className="font-semibold text-foreground mb-4 text-lg flex items-center gap-2">
                  <Package size={18} className="text-safari" />
                  Trip Details
                </h3>
                
                {/* Package Selection */}
                {!packageDetails && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-foreground mb-1.5">Safari Package *</label>
                    <Select
                      value={formData.selectedPackage}
                      onValueChange={(value) => handleSelectChange('selectedPackage', value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose a safari package" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px]">
                        <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">Day Excursions</div>
                        {safariPackages.filter(p => p.category === 'excursion').map((pkg) => (
                          <SelectItem key={pkg.id} value={pkg.title}>
                            {pkg.title} - {pkg.price}
                          </SelectItem>
                        ))}
                        <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground mt-2">Jeep Safaris</div>
                        {safariPackages.filter(p => p.category === 'jeep-safari').map((pkg) => (
                          <SelectItem key={pkg.id} value={pkg.title}>
                            {pkg.title} - {pkg.price}
                          </SelectItem>
                        ))}
                        <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground mt-2">Fly-in Safaris</div>
                        {safariPackages.filter(p => p.category === 'fly-in-safari').map((pkg) => (
                          <SelectItem key={pkg.id} value={pkg.title}>
                            {pkg.title} - {pkg.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {packageDetails && (
                  <div className="bg-secondary/30 rounded-xl p-4 mb-4">
                    <p className="font-medium text-foreground">{packageDetails.title}</p>
                    <p className="text-sm text-muted-foreground">{packageDetails.duration} · {packageDetails.location} · {packageDetails.price}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Number of Adults</label>
                    <Input
                      name="adults"
                      type="number"
                      min="1"
                      placeholder="e.g. 2"
                      value={formData.adults}
                      onChange={handleInputChange}
                      maxLength={10}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Number of Children</label>
                    <Input
                      name="children"
                      type="number"
                      min="0"
                      placeholder="e.g. 0"
                      value={formData.children}
                      onChange={handleInputChange}
                      maxLength={10}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-foreground mb-1.5">Accommodation Preference</label>
                  <Select
                    value={formData.accommodation}
                    onValueChange={(value) => handleSelectChange('accommodation', value)}
                  >
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

                <div className="mt-4">
                  <label className="block text-sm font-medium text-foreground mb-1.5">Special Requests</label>
                  <Textarea
                    name="specialRequests"
                    placeholder="Any special requirements, dietary needs, preferred dates, or additional information..."
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={1000}
                  />
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="border-t border-border p-4 md:p-6 bg-background flex-shrink-0">
              <p className="text-xs md:text-sm text-muted-foreground text-center mb-3">
                {t('booking.submitMethod')}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  <Send size={18} />
                  {t('booking.submitBooking')}
                </Button>
                <Button
                  onClick={handleWhatsAppBooking}
                  className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white"
                >
                  <MessageCircle size={18} />
                  {t('booking.bookOnWhatsApp')}
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
