import type { Projects } from '@app/models/projects';
import type { ServicesType } from '@app/models/servicesTypes';
import type { LinksHeaderArray } from '@app/models/types';

export const PROJECTS_V2: Projects = [
  {
    ID: '1-project',
    NAME: 'Classify',
    IMG: '../../../../assets/projects/classify.jpeg',
    REPOSITORY: 'https://github.com/ZenithGenius/Classify',
    DESC: 'Classify is a script that organizes files in a specified directory by their extensions, creating subfolders for each file type and moving the files accordingly. Its main purpose what to help in folder arrangement after a memory dump was done from deleted data.',
    ICONS: ['python'],
  },
  {
    ID: '2-project',
    NAME: 'Remaze',
    IMG: '../../../../assets/projects/remaze.png',
    REPOSITORY: 'https://github.com/ZenithGenius/Remaze',
    DESC: 'Remaze is a Java tower defense game that I build based on another existing project. The game has rising levels of difficult with different types of enemies and weapons the player can use. The main purpose is to demonstrate game coding using java and also having fun',
    ICONS: ['java'],
  },
  {
    ID: '3-project',
    NAME: 'NHD Website',
    IMG: '../../../../assets/projects/nhdWebsite.png',
    REPOSITORY: 'https://github.com/ZenithGenius/ev-website',
    DESC: 'This is a ReactJS website made for ITSC Sarl security, inorder to make a count down for the National hacking days(NHD) event hosted by the company. The project show cases the use of particles.js library more particular.',
    ICONS: ['react', 'css3','js','html'],
  },
  {
    ID: '4-project',
    NAME: 'Flutter Search App',
    IMG: '../../../../assets/projects/first_flutter_search.png',
    REPOSITORY: 'https://github.com/ZenithGenius/first_flutter_search_sample',
    DESC: 'This project is a starting point for a Flutter application. The program stores a collection of movies with image and short describtions(list of items), from which users can search upon. The main purpose is to demonstrate the use of Flutter for mobile app development.',
    ICONS: ['flutter', 'dart'],
  },
  {
    ID: '5-project',
    NAME: 'Whisper AI',
    IMG: '../../../../assets/projects/transcribe.png',
    REPOSITORY: 'https://github.com/ZenithGenius/transcribe_whisper',
    DESC: 'Invoicer++ is an open source application to generate commercial documents. It is an educational web platform created for students who are learning to create and manage business documents.',
    ICONS: ['python'],
  },
  {
    ID: '6-project',
    NAME: 'Youtube Video Downloader',
    IMG: '../../../../assets/projects/youtubeVideoDownloader.png',
    REPOSITORY: 'https://github.com/ZenithGenius/youtube_video_downloader',
    DESC: 'This Python script downloads YouTube videos or playlists using Pytube, automatically selecting the best resolution up to 1080p. It supports downloading audio-only or video formats, allows generating links from a playlist, and manages downloads from a file containing links. It applies patches to fix client version and throttling issues and displays progress indicators with options to resume in case of interruptions.',
    ICONS: ['python'],
  },
  {
    ID: '7-project',
    NAME: 'Spell Checker',
    IMG: '../../../../assets/projects/speller.png',
    REPOSITORY: 'https://github.com/ZenithGenius/cs50_problems_2022_x_speller',
    DESC: 'The code implements a dictionary using a hash table where each word is hashed and inserted into a linked list at the corresponding index. It implements a hash table-based dictionary for storing and checking words efficiently.',
    ICONS: ['C'],
  },
  {
    ID: '8-project',
    NAME: 'Quadratic Equation Trainer',
    IMG: '../../../../assets/projects/quadratic.png',
    REPOSITORY: 'https://github.com/ZenithGenius/cs50_problems_2022_x_project',
    DESC: 'This is a multi-functional tool that includes various features such as solving linear and quadratic equations, a dice game for two players, a random number guessing game, and an exercise-based learning module for equations. It uses a user-friendly interface with interactive prompts, allowing the user to input values and receive solutions or play games. The code utilizes random number generation and basic arithmetic to provide different functionalities.',
    ICONS: ['C'],
  },
  {
    ID: '9-project',
    NAME: 'Finance App',
    IMG: '../../../../assets/projects/finance.png',
    REPOSITORY: 'https://github.com/ZenithGenius/cs50_problems_2022_x_finance',
    DESC: 'At Cash Now I was working on the backend, this webapp was created to allow people to request a loan from a financial institution, be able to manage the installments and have an interest calculator on the loans.',
    ICONS: ['python'],
  },
  {
    ID: '10-project',
    NAME: 'DNA Analysis',
    IMG: '../../../../assets/projects/dna.png',
    REPOSITORY: 'https://github.com/ZenithGenius/cs50_problems_2022_x_dna',
    DESC: 'This script performs DNA sequence analysis, matching the Short Tandem Repeat (STR) patterns found in a DNA sequence with those stored in a CSV file containing various profiles of people. It takes two input arguments, the first being the database (data.csv) of people with their respective STR counts, and the second a DNA sequence file to match against the profiles',
    ICONS: ['python'],
  }
];

export const SERVICES: ServicesType = {
  TITLE_COMPLETE: 'Our service',
  TITLE: ['Our', 'Service'],
  SERVICES: [
    {
      ID: 'f0e8d8d83883',
      TITLE: 'Backend Developer',
      ICON: '../../../../../assets/backend.webp',
    },
    {
      ID: 'd1cde22d3af',
      TITLE: 'Frontend Developer',
      ICON: '../../../../../assets/web.webp',
    },
    {
      ID: 'dce9ba7f037',
      TITLE: 'Database Developer',
      ICON: '../../../../../assets/creator.webp',
    },
    {
      ID: 'df2103f1650c',
      TITLE: 'Software Architecture',
      ICON: '../../../../../assets/architect.webp',
    },
  ],
};

export const HEADER: LinksHeaderArray = [
  { ID: '1-pp', LABEL: 'Projects', PATH: '', FRAGMENT: 'projects' },
  { ID: '2-ap', LABEL: 'About', PATH: '', FRAGMENT: 'about' },
  { ID: '3-sp', LABEL: 'Studies', PATH: '', FRAGMENT: 'studies' },
  { ID: '4-cp', LABEL: 'Contact', PATH: '', FRAGMENT: 'contact' },
];
