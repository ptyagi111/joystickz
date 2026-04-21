import { DateField, PhoneField, CodeField } from "@ptyagi111/jsz-web";
import { PageHeader, Section, ImportBlock, DocExample, PropsTable } from "@/components/docs/doc-section";

export default function InputFieldDocs() {
  return (
    <div>
      <PageHeader
        title="Input Fields"
        description="Specialised form inputs for date of birth, phone number, and OTP code entry. Each has active and filled display states."
        tag="Form Elements"
      />
      <ImportBlock pkg="DateField, PhoneField, CodeField" />

      <Section title="Date Field" description="MM / DD / YYYY segmented date picker.">
        <DocExample
          title="Active state"
          code={`<DateField state="active" />`}
          center={false}
        >
          <DateField state="active" />
        </DocExample>

        <DocExample
          title="Filled state"
          code={`<DateField state="filled" value={{ month: "12", day: "14", year: "1990" }} />`}
          center={false}
        >
          <DateField state="filled" value={{ month: "12", day: "14", year: "1990" }} />
        </DocExample>
      </Section>

      <Section title="Phone Field" description="Country code prefix + phone number input.">
        <DocExample
          title="Active state"
          code={`<PhoneField state="active" />`}
          center={false}
        >
          <PhoneField state="active" />
        </DocExample>

        <DocExample
          title="Filled state"
          code={`<PhoneField state="filled" value="+1 343 345 3958" />`}
          center={false}
        >
          <PhoneField state="filled" value="+1 343 345 3958" />
        </DocExample>
      </Section>

      <Section title="Code Field" description="OTP / PIN entry with individual character boxes. Supports any length.">
        <DocExample
          title="6-digit — active"
          code={`<CodeField length={6} state="active" />`}
          center={false}
        >
          <CodeField length={6} state="active" />
        </DocExample>

        <DocExample
          title="6-digit — filled"
          code={`<CodeField length={6} state="filled" values={["5","5","5","5","5","5"]} />`}
          center={false}
        >
          <CodeField length={6} state="filled" values={["5", "5", "5", "5", "5", "5"]} />
        </DocExample>

        <DocExample
          title="4-digit — active"
          code={`<CodeField length={4} state="active" />`}
          center={false}
        >
          <CodeField length={4} state="active" />
        </DocExample>
      </Section>

      <Section title="Props — DateField">
        <PropsTable props={[
          { name: "state", type: '"active" | "filled"', default: '"active"', description: "Display state of the field" },
          { name: "value", type: '{ month: string; day: string; year: string }', description: "Pre-filled values (used in filled state)" },
        ]} />
      </Section>

      <Section title="Props — PhoneField">
        <PropsTable props={[
          { name: "state", type: '"active" | "filled"', default: '"active"', description: "Display state of the field" },
          { name: "value", type: "string", description: "Phone number string for filled state" },
        ]} />
      </Section>

      <Section title="Props — CodeField">
        <PropsTable props={[
          { name: "length", type: "number", required: true, description: "Number of character boxes to render" },
          { name: "state", type: '"active" | "filled"', default: '"active"', description: "Display state of the field" },
          { name: "values", type: "string[]", description: "Array of character values for filled state" },
        ]} />
      </Section>
    </div>
  );
}
