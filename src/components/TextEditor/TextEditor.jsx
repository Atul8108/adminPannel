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
          menubar: 'file edit view insert format tools tc table help',
          plugins: "powerpaste casechange searchreplace autolink directionality advcode visualblocks visualchars image link media mediaembed codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists checklist wordcount tinymcespellchecker help formatpainter permanentpen charmap linkchecker emoticons advtable export print autosave",
          toolbar:
           "undo redo print spellcheckdialog formatpainter | blocks fontfamily fontsize | bold italic underline forecolor backcolor | link image addcomment showcomments  | alignleft aligncenter alignright alignjustify lineheight | checklist bullist numlist indent outdent | removeformat",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          
        }}
      />
    </>
  );
};

export default TextEditor;