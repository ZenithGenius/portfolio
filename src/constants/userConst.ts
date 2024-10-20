import type { BentoUser, User } from '@app/models/types';

// General user data
export const USER: User = {
  name: 'Benny',
  lastname: 'Jason',
  fullName: 'Benny Joumessi Jason',
  email: 'joumessiisaac@gmail.com',
  motto: 'The Geeks shall inherit the properties of object Earth.',
  role: 'Cyber Security Analyst / Red Teamer',
  cv: 'https://drive.google.com/file/d/1QtjzEwzcggXj6jC5l4a7zrKr_AN_9Q83/view?usp=sharing',
  linkedIn: 'https://www.linkedin.com/in/joumessi-isaac/',
  gitHub: 'https://github.com/ZenithGenius',
  stackOverflow: '#',
  downloadCv: 'https://drive.usercontent.google.com/u/0/uc?id=1QtjzEwzcggXj6jC5l4a7zrKr_AN_9Q83&export=download',
};

// User data to complete the about bento
export const ABOUT_USER: BentoUser = {
  yearsExpertice: '02',
  experiences: [
    {
      ID: '1-exp',
      COMPANY: 'ITSC Sarl',
      ROLE: 'Cyber Security Analyst / Red Teamer',
      TIME: 'March 2023 - Present',
      DESCRIPTION:
        'Worked on constructing high-density networks (Switches, Routers, Firewalls) and setting up security systems (SIEM, IDPS). Conducted regular security audits and created command and control (C2) infrastructures for penetration testing.',
    },
    {
      ID: '2-exp',
      COMPANY: 'Personal Project',
      ROLE: 'AI and Automation Developer',
      TIME: '2022',
      DESCRIPTION:
        'Integrated AI into drones and developed autonomous recycling bins using microcontrollers for automation purposes. This project enhanced my skills in electronics and artificial intelligence integration.',
    },
    {
      ID: '3-exp',
      COMPANY: 'TryHackMe',
      ROLE: 'CTF Participant',
      TIME: 'Ongoing',
      DESCRIPTION:
        'Regularly participate in Capture The Flag (CTF) challenges on platforms like TryHackMe and VulnHub, improving ethical hacking and threat detection skills.',
    },
    {
      ID: '4-exp',
      COMPANY: 'ITSC Sarl',
      ROLE: 'Linux Systems Administrator',
      TIME: '2021 - 2022',
      DESCRIPTION:
        'Managed and maintained Linux servers, handled firewall configurations, and provided solutions for cybersecurity incidents while maintaining system integrity.',
    },
    {
      ID: '5-exp',
      COMPANY: 'ITSC Sarl',
      ROLE: 'Penetration Testing Specialist',
      TIME: '2021',
      DESCRIPTION:
        'Performed security audits, vulnerability assessments, and penetration testing to identify threats and weaknesses in organizational systems.',
    },
    {
      ID: '6-exp',
      COMPANY: 'University Projects',
      ROLE: 'Full Stack Developer',
      TIME: '2020 - 2021',
      DESCRIPTION:
        'Worked on multiple projects developing web and mobile applications using React, Java, and Python, focusing on user interfaces and backend services.',
    },
    {
      ID: '7-exp',
      COMPANY: 'VulnHub',
      ROLE: 'CTF Participant',
      TIME: 'Ongoing',
      DESCRIPTION:
        'Completed various CTF challenges to hone skills in reverse engineering, malware analysis, and network security.',
    },
    {
      ID: '8-exp',
      COMPANY: 'ITSC Sarl',
      ROLE: 'Red Team Intern',
      TIME: '2020',
      DESCRIPTION:
        'Supported the Red Team by setting up attack simulations, developing strategies for security improvements, and helping with penetration testing efforts.',
    },
    {
      ID: '9-exp',
      COMPANY: 'Personal Project',
      ROLE: 'Kernel Developer',
      TIME: '2021',
      DESCRIPTION:
        'Developed a custom Linux kernel for security-focused environments, improving system performance and security configurations.',
    },
    {
      ID: '10-exp',
      COMPANY: 'Freelance',
      ROLE: 'Network Security Consultant',
      TIME: '2021 - Present',
      DESCRIPTION:
        'Provided consultancy services on network security configurations, vulnerability scanning, and security hardening for small to medium-sized businesses.',
    },
  ],
  profile: {
    // URL or PATH to the img
    photo: '../../../../assets/utils/FOTO_CV.webp',
    // false still doesn't work
    isAvalaible: true,
    doYouLikeCoffee: true,
    country: 'Cameroun',
    qualification: 'IT Engineer',
    idioms: 'French & English',
    complement: 'A hard worker',
  },
  whoIam:
    'Cybersecurity expert and ethical hacker with a passion for solving challenges, including Capture The Flag (CTF) competitions on platforms like TryHackMe and VulnHub. Proficient in setting up command and control infrastructures, managing high-density networks, and implementing security solutions such as IDPS and SIEM systems like Wazuh. Experienced in Linux server management, Active Directory, and kernel development. I have a strong background in cybersecurity training, including boot camps on threat detection and prevention using MITRE ATT&CK, as well as certifications in ethical hacking and Fortinet. Additionally, I have expertise in front-end development with ReactJS and back-end development with Python and Java, along with mobile and desktop app development using Flutter. My work also extends to integrating AI into drones and automating processes with microcontrollers.',
  studies: [
    {
      ID: 'b00fb15c9503',
      DEGREE: 'Bachelor in Computer Engineering',
      STRONG: 'IT and Cybersecurity',
      STATE: 'Université Protestant de L\'Afrique Centrale - 2024 (Expected)',
      DESCRIPTION:
        'Focused on advanced topics in computer science, networks, and cybersecurity, specializing in penetration testing and system security.',
    },
    {
      ID: 'bf39334cc71f',
      DEGREE: 'FORTINET NSE1 and NSE2',
      STRONG: 'Cybersecurity',
      STATE: 'Fortinet - 2024',
      DESCRIPTION:
        'Completed cybersecurity training courses with Fortinet, focusing on network security fundamentals and advanced threat prevention techniques.',
    },
    {
      ID: 'fdeb87d4af5',
      DEGREE: 'CS50: Introduction to Computer Science',
      STRONG: 'Computer Science',
      STATE: 'Harvard University - 2022',
      DESCRIPTION:
        'A comprehensive introduction to computer science, covering algorithms, data structures, web development, and software engineering fundamentals.',
    },
    {
      ID: 'c55ba8d6cc12',
      DEGREE: 'MITRE ATT&CK Bootcamp',
      STRONG: 'Cybersecurity, Threat Intelligence',
      STATE: 'Virtually Testing Foundation - 2021',
      DESCRIPTION:
        'Learned about threat intelligence, analysis, and hunting using the MITRE ATT&CK framework, Wireshark, YARA Rules, and more.',
    },
    {
      ID: 'fdeb9bdf5af5',
      DEGREE: 'YouAccel: Nginx, Apache, SSL Encryption',
      STRONG: 'Web Security',
      STATE: 'YouAccel - 2020',
      DESCRIPTION:
        'Gained expertise in securing web servers, configuring Nginx and Apache, and applying SSL encryption.',
    },
    {
      ID: 'cert-1',
      DEGREE: 'Ethical Hacking: Footprinting and Reconnaissance',
      STRONG: 'Ethical Hacking',
      STATE: 'LinkedIn - 2022',
      DESCRIPTION:
        'Learned the basics of ethical hacking, including footprinting, reconnaissance, and vulnerability analysis.',
    },
    {
      ID: 'cert-2',
      DEGREE: 'Complete Malware Analysis Process',
      STRONG: 'Malware Analysis',
      STATE: 'LinkedIn - 2022',
      DESCRIPTION:
        'Mastered the complete process of malware analysis, including dynamic and static analysis of malicious software.',
    },
    {
      ID: 'cert-3',
      DEGREE: 'SQL Injection Attacks and Defense',
      STRONG: 'Web Security',
      STATE: 'LinkedIn - 2022',
      DESCRIPTION:
        'Acquired in-depth knowledge of SQL injection techniques and how to defend web applications from such attacks.',
    },
    {
      ID: 'cert-4',
      DEGREE: 'Cloud Computing Security',
      STRONG: 'Cloud Security',
      STATE: 'LinkedIn - 2022',
      DESCRIPTION:
        'Learned about cloud security risks, strategies to mitigate threats, and ensuring secure cloud infrastructures.',
    },
    {
      ID: 'cert-5',
      DEGREE: 'Penetration Testing with Metasploit',
      STRONG: 'Penetration Testing',
      STATE: 'LinkedIn - 2022',
      DESCRIPTION:
        'Mastered penetration testing techniques using the Metasploit framework to exploit vulnerabilities.',
    },
    {
      ID: 'cert-6',
      DEGREE: 'Wireless Network Security',
      STRONG: 'Network Security',
      STATE: 'LinkedIn - 2022',
      DESCRIPTION:
        'Developed expertise in securing wireless networks and preventing attacks like man-in-the-middle and WPA cracking.',
    },
    {
      ID: 'cert-7',
      DEGREE: 'Sniffers and Packet Analysis',
      STRONG: 'Network Analysis',
      STATE: 'LinkedIn - 2022',
      DESCRIPTION:
        'Gained expertise in using network sniffers and packet analysis tools to monitor network traffic and identify anomalies.',
    },
    {
      ID: 'cert-8',
      DEGREE: 'Hacking Web Applications',
      STRONG: 'Web Security',
      STATE: 'LinkedIn - 2022',
      DESCRIPTION:
        'Learned the techniques used to hack web applications and how to fortify them against various attack vectors.',
    },
    {
      ID: 'cert-9',
      DEGREE: 'Denial of Service (DoS) Attacks and Defenses',
      STRONG: 'Network Security',
      STATE: 'LinkedIn - 2022',
      DESCRIPTION:
        'Understood different types of DoS attacks and how to defend systems and networks against them.',
    },
    {
      ID: 'cert-10',
      DEGREE: 'Mobile Device Security',
      STRONG: 'Mobile Security',
      STATE: 'LinkedIn - 2022',
      DESCRIPTION:
        'Specialized in securing mobile devices from common attacks and securing mobile application development processes.',
    },
  ],
};
