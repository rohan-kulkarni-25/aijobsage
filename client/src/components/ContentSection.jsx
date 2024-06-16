import { Accordion, AccordionItem, Progress } from "@nextui-org/react";

const ContentSection = ({ content }) => {
  return (
    <div className="mt-8 space-y-6 ">
      {/* Fit Percentage */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <Progress
          size="sm"
          radius="sm"
          classNames={{
            base: "max-w-md",
            track: "drop-shadow-md border border-default",
            indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
          label="Job Fit Percentage"
          value={content.fit_percentage}
          showValueLabel={true}
        />
      </div>

      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Why you are fit for this role ?"
        >
          {content.reason_fit}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Role Summary">
          {content.summary}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="Personalised LinkedIn Message"
        >
          {content.linkedIn_Message}
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Accordion 3"
          title="Twitter DM Draft"
        >
          {content.twitter_Message}
        </AccordionItem>
        <AccordionItem
          key="5"
          aria-label="Accordion 3"
          title="Cold Email Draft"
        >
          {content.cold_email}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ContentSection;
