import Card from "@/src/components/card/Card";
import "../../app/globals.css";

const Price = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-bold text-4xl text-natural">Our Plans & Services</h2>
      <h3 className="text-[28px] text-natural mt-2.5">
        Pick the tools that fit your business best
      </h3>

      <div className="flex items-center mt-[50px]">
        <Card
          label="Free"
          price="$0"
          bill="TEXT"
          billString="Free For Everyone"
          features={[
            "Up to 3 active automations",
            "Connect up to 5 apps",
            "Basic support (email only)",
            "Community access",
          ]}
          position="LEFT"
          buttonLabel="Get Started"
        />
        <Card
          label="Pro"
          price="$12 per user/month"
          bill="YEAR"
          billString="Billed Yearly"
          features={[
            "All Free features +",
            "Connect 100+ apps",
            "Advanced workflow templates",
            "Priority support (chat & email)",
            "Team collaboration tools",
          ]}
          position="CENTER"
          buttonLabel="Get Started"
        />
        <Card
          label="Enterprise"
          price="Contact Us"
          bill="TEXT"
          billString="Annual billing only"
          features={[
            "All Pro features +",
            "Dedicated account manager",
            "Custom integrations (API & SSO)",
            "Enterprise-grade security & compliance",
            "SLA with 99.9% uptime guarantee",
            "Personalized onboarding & training",
          ]}
          position="RIGHT"
          buttonLabel="Request Trial"
        />
      </div>
    </div>
  );
};

export default Price;
