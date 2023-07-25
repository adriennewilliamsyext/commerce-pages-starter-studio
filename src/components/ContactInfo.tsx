import { HexColor } from "@yext/studio";

export interface ContactInfoProps {
  children?: React.ReactNode;
  name?: string;
  title?: string;
  addressLine1?: string;
  addressLine2?: string;
  phone?: string;
  email?: string;
  textColor?: HexColor;
}
const ContactInfo = ({
  name,
  title,
  addressLine1,
  addressLine2,
  phone,
  email,
  textColor,
}: ContactInfoProps) => {
  return (
    <div className="rounded-lg m-12 bg-slate-300 bg-opacity-75 p-8">
      <h1 className="text-2xl font-bold mb-2" style={{ color: textColor }}>
        {name}
      </h1>
      <h2 className="text-lg font-semibold mb-2" style={{ color: textColor }}>
        {title}
      </h2>
      <div className="mb-2">
        <div className="flex mb-1">
          <p className="w-1/2 mr-2" style={{ color: textColor }}>
            {addressLine1}
          </p>
          <p className="w-1/2" style={{ color: textColor }}>
            {phone}
          </p>
        </div>
        <div className="flex mb-1">
          <p className="w-1/2 mr-2" style={{ color: textColor }}>
            {addressLine2}
          </p>
          <p className="w-1/2" style={{ color: textColor }}>
            {email}
          </p>
        </div>
      </div>
      <button className="bg-purple-600 text-white hover:bg-purple-300 font-semibold py-2 px-4 rounded">
        Contact
      </button>
    </div>
  );
};

export default ContactInfo;
