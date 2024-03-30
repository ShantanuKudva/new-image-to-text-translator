"use client";

import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LanguageSelect({ selectedLanguage, setSelectedLanguage }) {
  const languageObject = {
    afr: "Afrikaans",
    sqi: "Albanian",
    amh: "Amharic",
    ara: "Arabic",
    hye: "Armenian",
    aze: "Azerbaijani",
    eus: "Basque",
    bel: "Belarusian",
    ben: "Bengali",
    bos: "Bosnian",
    bul: "Bulgarian",
    cat: "Catalan",
    ceb: "Cebuano",
    cos: "Corsican",
    hrv: "Croatian",
    ces: "Czech",
    dan: "Danish",
    nld: "Dutch",
    eng: "English",
    epo: "Esperanto",
    est: "Estonian",
    fil: "Filipino",
    fin: "Finnish",
    fra: "French",
    fry: "Frisian",
    glg: "Galician",
    kat: "Georgian",
    deu: "German",
    ell: "Greek",
    guj: "Gujarati",
    hin: "Hindi",
    hun: "Hungarian",
    isl: "Icelandic",
    ind: "Indonesian",
    gle: "Irish",
    ita: "Italian",
    jpn: "Japanese",
    jav: "Javanese",
    kan: "Kannada",
    kaz: "Kazakh",
    khm: "Khmer",
    kor: "Korean",
    kir: "Kyrgyz",
    lao: "Lao",
    lat: "Latin",
    lav: "Latvian",
    lit: "Lithuanian",
    ltz: "Luxembourgish",
    mkd: "Macedonian",
    mlg: "Malagasy",
    msa: "Malay",
    mal: "Malayalam",
    mlt: "Maltese",
    mri: "Maori",
    mar: "Marathi",
    mon: "Mongolian",
    mya: "Myanmar (Burmese)",
    nep: "Nepali",
    nor: "Norwegian",
    ori: "Odia",
    pus: "Pashto",
    fas: "Persian",
    pol: "Polish",
    por: "Portuguese",
    pan: "Punjabi",
    ron: "Romanian",
    rus: "Russian",
    smo: "Samoan",
    gla: "Scots Gaelic",
    srp: "Serbian",
    sot: "Sesotho",
    sna: "Shona",
    snd: "Sindhi",
    sin: "Sinhala",
    slk: "Slovak",
    slv: "Slovenian",
    som: "Somali",
    spa: "Spanish",
    sun: "Sundanese",
    swa: "Swahili",
    swe: "Swedish",
    tgl: "Tagalog (Filipino)",
    tgk: "Tajik",
    tam: "Tamil",
    tel: "Telugu",
    tha: "Thai",
    tur: "Turkish",
    ukr: "Ukrainian",
    urd: "Urdu",
    uig: "Uyghur",
    uzb: "Uzbek",
    vie: "Vietnamese",
    cym: "Welsh",
    xho: "Xhosa",
    yid: "Yiddish",
    yor: "Yoruba",
    zul: "Zulu",
  };

  const languageArray = Object.keys(languageObject).map((key) => ({
    key: key,
    value: languageObject[key],
  }));

  return (
    <Select onValueChange={(value) => setSelectedLanguage(value)}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a Language" />
      </SelectTrigger>

      <SelectContent>
        {languageArray.map((lang) => (
          <SelectItem key={lang.key} value={lang.value}>
            {lang.value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
