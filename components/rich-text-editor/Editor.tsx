"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import Starterkit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import { Menubar } from "./Menubar";

interface FieldProps {
  value: string;
  onChange: (value: string) => void;
  // Agrega 'onBlur: () => void;' si también lo usas
}

export default function RichTextEditor({ field }: { field: FieldProps }) {
  const editor = useEditor({
    extensions: [
      Starterkit,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],

    editorProps: {
      attributes: {
        class:
          "min-h-[300px] focus:outline-none p-4 prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-full dark:prose-invert !w-full !max-w-none",
      },
    },

    immediatelyRender: false,

    onUpdate: ({ editor }) => {
      field.onChange(JSON.stringify(editor.getJSON()));
    },

    content: field.value ? JSON.parse(field.value) : "<p>Hello World</p>",
  });

  return (
    <div className="w-full border border-input rounded-lg overflow-hidden dark:bg-input/30 ">
      {editor && <Menubar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
}
