import { Editor } from "@tinymce/tinymce-react";
import React from "react";


const TextEditor = ({ editorRef,value }) => {
  return (
    <>
      <Editor
        apiKey="nf8059vixet2rh0lc7lr3ai2zdb6qajnd86hhi0bemxatspp"
        id="editor"
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={value}
        init={{
          height: 500,
          menubar: 'file edit view insert format tools tc',
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount link ",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | h1 h2 h3 h4 h5 h6 | forecolor formatselect copy cut | backcolor language lineheight newdocument redo | strikethrough styleselect subscript superscript underline visualaid | ltr rtl " +
            "removeformat | help| " ,
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          
        }}
      />
    </>
  );
};

export default TextEditor;
