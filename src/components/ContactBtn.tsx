import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { AiOutlineSend } from "react-icons/ai";

export default function ContactBtn() {
  const { pending } = useFormStatus();
  return (
    <div className="flex items-center justify-between">
      <button
        type="submit"
        className="group w-full hover:scale-95 disabled:scale-100 disabled:bg-opacity-65 transition-all flex justify-center items-center rounded bg-gray-950 hover:bg-gray-800 py-2 font-medium text-white"
        disabled={pending}
      >
        {pending ? (
            <>
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            <p className="ml-4">Sending...</p>
            </>
          
        ) : (
          <>
            Send Message
            <AiOutlineSend className="group-hover:translate-x-2 ml-5 transition-all disabled:translate-x-0" />
          </>
        )}
      </button>
    </div>
  );
}
