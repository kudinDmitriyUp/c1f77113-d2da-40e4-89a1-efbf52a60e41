"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroLogo from "@/components/sections/hero/HeroLogo";
import SplitAbout from "@/components/sections/about/SplitAbout";
import FeatureCardFive from "@/components/sections/feature/FeatureCardFive";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import PricingCardOne from "@/components/sections/pricing/PricingCardOne";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardOne from "@/components/sections/team/TeamCardOne";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import ContactCenterForm from "@/components/sections/contact/ContactCenterForm";
import FooterSocial from "@/components/sections/footer/FooterSocial";
import { Award, Star, Shield, Key, Wrench, Crown, Settings, RefreshCw, Car, TrendingUp, Calendar, Heart, Users, MessageCircle, Handshake, FileText, Instagram, Facebook, Twitter } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="large"
      background="none"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Inventory", id: "product" },
            { name: "About", id: "about" },
            { name: "Services", id: "feature" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Prestige Motors"
          button={{ text: "Schedule Test Drive", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="PRESTIGE MOTORS"
          description="Experience the pinnacle of automotive excellence with our curated collection of luxury vehicles"
          buttons={[
            { text: "View Inventory", href: "product" },
            { text: "Schedule Test Drive", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468334849-2g7954qw.jpg"
          imageAlt="Premium luxury car in elegant showroom lighting"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Excellence in Automotive Luxury"
          description="For over three decades, Prestige Motors has been the premier destination for discerning automotive enthusiasts seeking the finest luxury vehicles"
          tag="Heritage"
          tagIcon={Award}
          bulletPoints={[
            {
              title: "Premium Selection",
              description: "Handpicked luxury vehicles from the world's most prestigious manufacturers",
              icon: Star
            },
            {
              title: "Expert Service",
              description: "Certified technicians and sales professionals with decades of experience",
              icon: Shield
            },
            {
              title: "Exclusive Access",
              description: "First access to limited editions and rare automotive masterpieces",
              icon: Key
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468335594-55rdlrct.jpg"
          imageAlt="Luxury car dealership showroom with premium vehicles"
          imagePosition="right"
          textboxLayout="default"
          buttons={[{ text: "Our Story", href: "about" }]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardFive
          title="Premium Services"
          description="Comprehensive automotive services tailored for luxury vehicle owners"
          tag="Services"
          tagIcon={Wrench}
          features={[
            { title: "Concierge Service", icon: Crown },
            { title: "Extended Warranty", icon: Shield },
            { title: "VIP Maintenance", icon: Settings },
            { title: "Trade-In Program", icon: RefreshCw }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          showIconBoxBackground={true}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Featured Collection"
          description="Discover our handpicked selection of premium luxury vehicles"
          tag="Inventory"
          tagIcon={Car}
          products={[
            {
              id: "1",
              brand: "Mercedes-Benz",
              name: "S-Class AMG",
              price: "$145,000",
              rating: 5,
              reviewCount: "12",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468336392-3uni2w4j.jpg",
              imageAlt: "Mercedes-Benz S-Class AMG luxury sedan"
            },
            {
              id: "2",
              brand: "BMW",
              name: "X7 M50i",
              price: "$120,000",
              rating: 5,
              reviewCount: "8",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468337239-8n7q8fxs.jpg",
              imageAlt: "BMW X7 M50i luxury SUV"
            },
            {
              id: "3",
              brand: "Porsche",
              name: "911 Turbo S",
              price: "$230,000",
              rating: 5,
              reviewCount: "15",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468337802-l20c0ogo.jpg",
              imageAlt: "Porsche 911 Turbo S sports car"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="scale-rotate"
          textboxLayout="default"
          buttons={[{ text: "View All Inventory", href: "product" }]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Membership Programs"
          description="Exclusive membership tiers designed for luxury automotive enthusiasts"
          tag="Membership"
          tagIcon={Crown}
          plans={[
            {
              id: "select",
              badge: "Select",
              badgeIcon: Star,
              price: "$2,500/year",
              subtitle: "Premium benefits for enthusiasts",
              features: [
                "Priority test drives",
                "Exclusive event invitations",
                "Complimentary detailing",
                "Extended warranty options"
              ]
            },
            {
              id: "elite",
              badge: "Elite",
              badgeIcon: Crown,
              price: "$5,000/year",
              subtitle: "Ultimate luxury experience",
              features: [
                "Concierge vehicle delivery",
                "Private showroom access",
                "Custom vehicle sourcing",
                "Lifetime maintenance packages"
              ]
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Our Excellence"
          description="Three decades of automotive luxury leadership"
          tag="Performance"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "30+",
              title: "years",
              description: "Serving luxury car enthusiasts",
              icon: Calendar
            },
            {
              id: "2",
              value: "500+",
              title: "vehicles",
              description: "Premium cars sold annually",
              icon: Car
            },
            {
              id: "3",
              value: "98%",
              title: "satisfaction",
              description: "Customer satisfaction rate",
              icon: Heart
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="opacity"
          textboxLayout="default"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Expert Team"
          description="Meet our certified automotive specialists"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Michael Sterling",
              role: "Sales Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468338611-hnyf1rcr.jpg",
              imageAlt: "Michael Sterling, Sales Director"
            },
            {
              id: "2",
              name: "Elena Rodriguez",
              role: "Luxury Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468339421-tem1rdef.jpg",
              imageAlt: "Elena Rodriguez, Luxury Specialist"
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Client Testimonials"
          description="Hear from our satisfied luxury vehicle owners"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "James Harrison",
              role: "CEO",
              company: "Harrison Enterprises",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468339968-90b8nc8d.jpg",
              imageAlt: "James Harrison testimonial"
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Managing Partner",
              company: "Chen & Associates",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468340530-8gw85hu4.jpg",
              imageAlt: "Sarah Chen testimonial"
            },
            {
              id: "3",
              name: "David Mitchell",
              role: "Investment Director",
              company: "Mitchell Capital",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468341210-dcx472b9.png",
              imageAlt: "David Mitchell testimonial"
            },
            {
              id: "4",
              name: "Alexandra Stone",
              role: "Business Owner",
              company: "Stone Consulting",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468342054-4f0yj2pg.jpg",
              imageAlt: "Alexandra Stone testimonial"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="blur-reveal"
          textboxLayout="default"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted Partnerships"
          description="Authorized dealer for the world's most prestigious automotive brands"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468342744-gd7sscrw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468343525-26kfmq1e.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468344232-pfarcrjf.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468345025-nhnwce99.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468345617-7311q078.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468346488-qnmy8tcv.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468347162-crco8sd8.jpg"
          ]}
          textboxLayout="default"
          speed={35}
          showCard={true}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Updates"
          description="Stay informed about luxury automotive trends and news"
          tag="Blog"
          tagIcon={FileText}
          blogs={[
            {
              id: "1",
              category: "Maintenance",
              title: "Essential Care for Luxury Vehicles",
              excerpt: "Expert tips to maintain your luxury vehicle's performance and value",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468347829-1v2xnu0q.jpg",
              imageAlt: "Luxury car maintenance guide",
              authorName: "Michael Sterling",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468338611-hnyf1rcr.jpg",
              date: "15 Dec 2024"
            },
            {
              id: "2",
              category: "Buying Guide",
              title: "Choosing Your Perfect Luxury Car",
              excerpt: "A comprehensive guide to selecting the ideal luxury vehicle for your lifestyle",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468348571-qesi9e46.jpg",
              imageAlt: "Luxury car buying consultation",
              authorName: "Elena Rodriguez",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468339421-tem1rdef.jpg",
              date: "10 Dec 2024"
            },
            {
              id: "3",
              category: "New Models",
              title: "2025 Luxury Car Preview",
              excerpt: "Get an exclusive look at the most anticipated luxury vehicles of 2025",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468349282-u16ec8j9.jpg",
              imageAlt: "2025 luxury car models preview",
              authorName: "Michael Sterling",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763468338611-hnyf1rcr.jpg",
              date: "5 Dec 2024"
            }
          ]}
          animationType="scale-rotate"
          textboxLayout="default"
          buttons={[{ text: "View All Articles", href: "blog" }]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Schedule Your Private Consultation"
          description="Experience our luxury vehicles with a personalized test drive appointment"
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "vehicle", type: "text", placeholder: "Vehicle of Interest", required: false }
          ]}
          textarea={{ name: "message", placeholder: "Additional preferences or questions...", rows: 4, required: false }}
          buttonText="Schedule Appointment"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="PRESTIGE MOTORS"
          columns={[
            {
              title: "Inventory",
              items: [
                { label: "Luxury Sedans", href: "product" },
                { label: "Premium SUVs", href: "product" },
                { label: "Sports Cars", href: "product" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Sales", href: "feature" },
                { label: "Maintenance", href: "feature" },
                { label: "Financing", href: "feature" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com/prestigemotors", ariaLabel: "Follow us on Instagram" },
            { icon: Facebook, href: "https://facebook.com/prestigemotors", ariaLabel: "Follow us on Facebook" },
            { icon: Twitter, href: "https://twitter.com/prestigemotors", ariaLabel: "Follow us on Twitter" }
          ]}
          copyrightText="© 2024 Prestige Motors. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}