import React from "react";

type InputProps = {
  placeholder?: string;
  value?: string;
  className?: string;
  id?: string;
} & (
  | {
      type?: "text" | "date" | "number" | "file";
      // eslint-disable-next-line no-unused-vars
      onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }
  | {
      type: "textarea";
      // eslint-disable-next-line no-unused-vars
      onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    }
);
const FormHelper: React.FunctionComponent<InputProps> = (props: InputProps) => {
  if (props.type === "textarea") {
    return <textarea {...props} required />;
  }
  return <input {...props} required />;
};

export default FormHelper;
