"use client";

import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { LanguageSelect } from "@/components/languageSelect";
import { Toaster, toast } from "sonner";
import { Label } from "@/components/ui/label";

const videoConstraints = {
  width: 540,
  facingMode: "environment",
};

const Camera = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);
  const [fromLang, setFromLang] = useState();
  const [toLang, setToLang] = useState();
  const [response, setResponse] = useState("");

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) {
      toast.error("Please click a picture");
      return;
    }
    if (!fromLang || !toLang) {
      toast.error("Please select the languages");
      return;
    }
    const formData = new FormData();
    formData.append("file", url);
    formData.append("fromLang", fromLang);
    formData.append("toLang", toLang);
    fetch("http://localhost:8000/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
        if (data.status === 200)
          toast.success(
            "Image uploaded successfully and text translated successfully"
          );
        else toast.error("Error uploading image and translating text");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error uploading image and translating text");
      });
  };

  return (
    <>
      <main suppressHydrationWarning className="p-5">
        <Toaster richColors position="top-right" duration={1500} />
        <nav className="flex justify-between items-center">
          <h1 className="font-bold">Transmania</h1>
          <ModeToggle />
        </nav>
        <div className="text-center m-10 grid gap-5">
          <h1 className="text-3xl font-semibold ml-4">Click a Pic!</h1>
          <h2>
            Use yout camera to click a picture and extract text from it and
            translate the text for you!
          </h2>
          <Webcam
            ref={webcamRef}
            audio={true}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            onUserMedia={onUserMedia}
          />
          <div className="flex gap-2">
            <Button onClick={capturePhoto}>Capture</Button>
            <Button onClick={() => setUrl(null)}>Refresh</Button>
          </div>
          {url && (
            <div>
              {console.log(typeof url)}
              <img src={url} alt="Screenshot" />
            </div>
          )}
          <h3 className="select the languages"></h3>
          <div className="md:flex gap-10 grid md:grid-cols-1 md:justify-center justify-center items-center md:items-center">
            <div className="flex gap-2 items-center">
              <Label>From Language:</Label>

              <LanguageSelect
                selectedLanguage={fromLang}
                setSelectedLanguage={setFromLang}
              />
            </div>
            <div className="flex gap-2 items-center">
              <Label>To Language:</Label>

              <LanguageSelect
                selectedLanguage={toLang}
                setSelectedLanguage={setToLang}
              />
            </div>
          </div>
          <Button className="w-40 " onClick={handleSubmit}>
            Upload Image
          </Button>
          {response ? (
            <div>
              <div>
                <p>The Extracted Text is : {response.data.original_text}</p>
                <p>The Translated Text is : {response.data.translated_text}</p>
              </div>
            </div>
          ) : null}
        </div>
      </main>
    </>
  );
};

export default Camera;
