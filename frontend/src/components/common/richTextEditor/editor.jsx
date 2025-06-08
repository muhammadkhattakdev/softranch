import React, { useRef, useEffect } from "react";
import {
  Bold,
  Italic,
  Underline,
  Link2,
  List,
  ListOrdered,
  Quote,
  Code,
  Heading1,
  Heading2,
  Heading3,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Image,
} from "lucide-react";
import "./style.css";

const RichTextEditor = ({ value, onChange, placeholder, error }) => {
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
    handleChange();
  };

  const handleChange = () => {
    if (onChange) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleKeyDown = (e) => {
    // Handle Tab key
    if (e.key === "Tab") {
      e.preventDefault();
      execCommand("insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    execCommand("insertText", text);
  };

  const insertLink = () => {
    const url = prompt("Enter URL:");
    if (url) {
      execCommand("createLink", url);
    }
  };

  const insertImage = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Convert to base64 for simplicity
    // In production, you'd upload to server and get URL
    const reader = new FileReader();
    reader.onload = (e) => {
      execCommand("insertImage", e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const formatBlock = (tag) => {
    execCommand("formatBlock", tag);
  };

  const toolbarButtons = [
    { icon: Bold, command: "bold", title: "Bold" },
    { icon: Italic, command: "italic", title: "Italic" },
    { icon: Underline, command: "underline", title: "Underline" },
    "separator",
    { icon: Heading1, command: () => formatBlock("h1"), title: "Heading 1" },
    { icon: Heading2, command: () => formatBlock("h2"), title: "Heading 2" },
    { icon: Heading3, command: () => formatBlock("h3"), title: "Heading 3" },
    "separator",
    { icon: List, command: "insertUnorderedList", title: "Bullet List" },
    { icon: ListOrdered, command: "insertOrderedList", title: "Numbered List" },
    { icon: Quote, command: () => formatBlock("blockquote"), title: "Quote" },
    { icon: Code, command: () => formatBlock("pre"), title: "Code Block" },
    "separator",
    { icon: AlignLeft, command: "justifyLeft", title: "Align Left" },
    { icon: AlignCenter, command: "justifyCenter", title: "Align Center" },
    { icon: AlignRight, command: "justifyRight", title: "Align Right" },
    "separator",
    { icon: Link2, command: insertLink, title: "Insert Link" },
    { icon: Image, command: insertImage, title: "Insert Image" },
  ];

  return (
    <div className={`dash-editor ${error ? "error" : ""}`}>
      <div className="dash-editor-toolbar">
        {toolbarButtons.map((button, index) => {
          if (button === "separator") {
            return <div key={index} className="dash-toolbar-separator" />;
          }

          const Icon = button.icon;
          return (
            <button
              key={index}
              type="button"
              onClick={() => {
                if (typeof button.command === "function") {
                  button.command();
                } else {
                  execCommand(button.command);
                }
              }}
              className="dash-toolbar-btn"
              title={button.title}
            >
              <Icon size={18} />
            </button>
          );
        })}
      </div>

      <div
        ref={editorRef}
        contentEditable
        className="dash-editor-content"
        onInput={handleChange}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        placeholder={placeholder}
        dangerouslySetInnerHTML={{ __html: value }}
      />

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default RichTextEditor;
