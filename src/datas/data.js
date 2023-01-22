import googleCEO from "../assets/images/ceos/google-ceo.png";
import amazonCEO from "../assets/images/ceos/amazon-ceo.png";
import metaCEO from "../assets/images/ceos/meta-ceo.png";
import appleCEO from "../assets/images/ceos/apple-ceo.png";
import microsoftCEO from "../assets/images/ceos/microsoft-ceo.png";

import gmail from "../assets/images/products/google/gmail-logo.png";
import drive from "../assets/images/products/google/drive-logo.png";
import maps from "../assets/images/products/google/maps-logo.png";
import photos from "../assets/images/products/google/photos-logo.png";
import search from "../assets/images/products/google/search-logo.png";
import translate from "../assets/images/products/google/translate-logo.png";
import playStore from "../assets/images/products/google/play-store-logo.png";

import driveAmazon from "../assets/images/products/amazon/drive-logo.png";
import luna from "../assets/images/products/amazon/luna-logo.png";
import prime from "../assets/images/products/amazon/prime-logo.png";
import primeVideo from "../assets/images/products/amazon/prime-video-logo.png";
import studios from "../assets/images/products/amazon/studios-logo.png";
import webServices from "../assets/images/products/amazon/web-services.png";
import gameStudios from "../assets/images/products/amazon/game-studios-logo.png";

import facebook from "../assets/images/products/meta/facebook-logo.png";
import instagram from "../assets/images/products/meta/instagram-logo.png";
import messenger from "../assets/images/products/meta/messenger-logo.png";
import quest from "../assets/images/products/meta/quest-logo.png";
import spark from "../assets/images/products/meta/spark-logo.png";
import whatsApp from "../assets/images/products/meta/whatsApp-logo.png";

import appStore from "../assets/images/products/apple/app-store.png";
import icloud from "../assets/images/products/apple/icloud-logo.png";
import ipad from "../assets/images/products/apple/ipad-logo.png";
import iphone from "../assets/images/products/apple/iphone-logo.png";
import itunes from "../assets/images/products/apple/itunes-logo.png";
import music from "../assets/images/products/apple/music-logo.jpg";
import watch from "../assets/images/products/apple/watch-logo.png";
import tvPlus from "../assets/images/products/apple/tv-plus-logo.png";

import bing from "../assets/images/products/microsoft/bing-logo.png";
import github from "../assets/images/products/microsoft/github.png";
import linkedin from "../assets/images/products/microsoft/linkedin-logo.png";
import microsoftOffice365 from "../assets/images/products/microsoft/microsoft-office-365-logo.png";
import typescript from "../assets/images/products/microsoft/typescript.png";
import visualStudioCode from "../assets/images/products/microsoft/visual-studio-code-logo.png";

import googleLogo from "../assets/images/products/google/google-logo.png";
import metaLogo from "../assets/images/products/meta/meta-logo.png";
import microsoftLogo from "../assets/images/products/microsoft/microsoft-logo.png";
import appleLogo from "../assets/images/products/apple/apple-logo.png";
import amazonLogo from "../assets/images/products/amazon/amazon-logo.png";

export const CEOS = [
    {
        id: 1,
        company: "Google",
        value: "Sundar Pichai",
        image: googleCEO,
        nationality: "Indian-American",
    },
    {
        id: 2,
        company: "Amazon",
        value: "Andy Jassy",
        image: amazonCEO,
        nationality: "American",
    },
    {
        id: 3,
        company: "Meta",
        value: "Mark Zuckerberg",
        image: metaCEO,
        nationality: "American",
    },
    {
        id: 4,
        company: "Apple",
        value: "Tim Cook",
        image: appleCEO,
        nationality: "American",
    },
    {
        id: 5,
        company: "Microsoft",
        value: "Satya Nadella",
        image: microsoftCEO,
        nationality: "Indian-American",
    },
];

export const products = [
    {
        id: 1,
        company: "Google",
        logo: googleLogo,
        value: [
            { id: 1, logo: gmail, name: "Gmail", release: "April 1, 2004" },
            { id: 2, logo: search, name: "Search", release: "1998" },
            { id: 3, logo: maps, name: "Maps", release: "February 8, 2005" },
            {
                id: 4,
                logo: playStore,
                name: "Play Store",
                release: "March 6, 2012",
            },
            { id: 5, logo: drive, name: "Drive", release: "April 24, 2012" },
            {
                id: 6,
                logo: translate,
                name: "Translate",
                release: "April 28, 2006",
            },
            { id: 7, logo: photos, name: "Photos", release: "May 28, 2015" },
        ],
    },
    {
        id: 2,
        company: "Amazon",
        logo: amazonLogo,
        value: [
            { id: 1, logo: prime, name: "Prime", release: "February 2005" },
            {
                id: 2,
                logo: studios,
                name: "Studios",
                release: "November 16, 2010",
            },
            {
                id: 3,
                logo: gameStudios,
                name: "Game Studios",
                release: "August 7, 2012",
            },
            { id: 4, logo: luna, name: "Luna", release: "September 24, 2020" },
            {
                id: 5,
                logo: primeVideo,
                name: "Prime Video",
                release: "September 7, 2006",
            },
            {
                id: 6,
                logo: webServices,
                name: "Web Services",
                release: "March 3, 2006",
            },
            {
                id: 7,
                logo: driveAmazon,
                name: "Drive",
                release: "March 29, 2011",
            },
        ],
    },
    {
        id: 3,
        company: "Meta",
        logo: metaLogo,
        value: [
            {
                id: 1,
                logo: facebook,
                name: "Facebook",
                release: "February 2004",
            },
            {
                id: 2,
                logo: instagram,
                name: "Instagram",
                release: "October 6, 2010",
            },
            { id: 3, logo: spark, name: "Spark", release: "2017" },
            {
                id: 4,
                logo: messenger,
                name: "Messenger",
                release: "August 9, 2011",
            },
            {
                id: 5,
                logo: whatsApp,
                name: "WhatsApp",
                release: "January 2009",
            },
            { id: 6, logo: quest, name: "Quest", release: "July, 2012" },
        ],
    },
    {
        id: 4,
        company: "Apple",
        logo: appleLogo,
        value: [
            {
                id: 1,
                logo: appStore,
                name: "App Store",
                release: "July 10, 2008",
            },
            { id: 2, logo: tvPlus, name: "TV+", release: "November 1, 2009" },
            { id: 3, logo: music, name: "Music", release: "June 30, 2015" },
            { id: 4, logo: watch, name: "Watch", release: "April 2015" },
            { id: 5, logo: iphone, name: "iPhone", release: "June 29, 2007" },
            { id: 6, logo: ipad, name: "iPad", release: "April 3, 2010" },
            {
                id: 7,
                logo: icloud,
                name: "iCloud",
                release: "October 12, 2011",
            },
            { id: 8, logo: itunes, name: "iTunes", release: "January 9, 2001" },
        ],
    },
    {
        id: 5,
        company: "Microsoft",
        logo: microsoftLogo,
        value: [
            { id: 1, logo: github, name: "Github", release: "April 2008" },
            {
                id: 2,
                logo: typescript,
                name: "Typescript",
                release: "October 2012",
            },
            {
                id: 3,
                logo: visualStudioCode,
                name: "Visual Studio Code",
                release: "April 29, 2015",
            },
            {
                id: 4,
                logo: microsoftOffice365,
                name: "Microsoft 365",
                release: "June 28, 2011",
            },
            { id: 5, logo: bing, name: "Bing", release: "June 3, 2009" },
            { id: 6, logo: linkedin, name: "Linkedin", release: "May 5, 2003" },
        ],
    },
];
