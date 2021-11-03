import Link from "next/link";
import { useState } from "react";
import { copyToClipboard } from "../lib/utils";

const CommandBlockWithTitle = ({ label, command, link }) => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <>
      <p className="mt-2 text-lg">{label}</p>
      <p className="relative px-1 mt-2 text-base text-white bg-black rounded">
        <span>{command + " "}</span>
        <a className="underline cursor-pointer">{link}</a>
      </p>
      <div className="mt-2 mb-4 text-base">
        <button
          className="border-b-2 border-black"
          onClick={() => {
            copyToClipboard(`${command} ${link}`).then(() => {
              setIsCopied(true);
              setTimeout(() => setIsCopied(false), 3000);
            });
          }}
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
        {" | "}
        <Link href={link}>
          <a>Raw</a>
        </Link>
      </div>
    </>
  );
};
export default CommandBlockWithTitle;
