const certificateFiles = [
  {
    title: 'Android Developer Internship',
    issuer: 'Internshala',
  
    fileName: 'Adroid Devolper intership.png',
  },
  {
    title: 'Altius Coordinator',
    issuer: 'Altius',
  
    fileName: 'Altius Cordinator.jpeg',
  },
  {
    title: 'AWS Cloud Foundations',
    issuer: 'AWS',
  
    fileName: 'Aws Cloud Foundations.png',
  },
  {
    title: 'Azure DP-900',
    issuer: 'Microsoft',
  
    fileName: 'Azure Dp-900 Microsoft.jpeg',
  },
  {
    title: 'BE Degree Certificate',
    issuer: 'College',
  
    fileName: 'BE Degree Certificate.jpeg',
  },
  {
    title: 'Department Treasurer',
    issuer: 'Department',
  
    fileName: 'Department Treasurer.jpeg',
  },
  {
    title: 'Experience Letter',
    issuer: 'Company',
  
    fileName: 'Experience Letter.jpeg',
  },
  {
    title: 'Google Cloud Computing Foundations',
    issuer: 'Google',
    fileName: 'Google Cloud Computing Foundations .png',
  },
  {
    title: 'Intel Machine Learning',
    issuer: 'Intel',
    fileName: 'Intel Machine Learning.jpeg',
  },
  {
    title: 'Intel Unnathi Machine Learning',
    issuer: 'Intel',
  
    fileName: 'Intel Unnathi Machine Learning.jpeg',
  },
  {
    title: 'Internship Experience',
    issuer: 'Internship',
  
    fileName: 'Internship Experience.jpeg',
  },
  {
    title: 'IT Specialist Python',
    issuer: 'Microsoft',
  
    fileName: 'IT Specialist Python.png',
  },
  {
    title: 'JavaScript',
    issuer: 'Coursera',
  
    fileName: 'JavaScript.png',
  },
  {
    title: 'Learn and Master C Programming',
    issuer: 'Course',
  
    fileName: 'Learn and Master C Programming For Absolute Beginers.png',
  },
  {
    title: 'NPTEL Python for Data Science',
    issuer: 'NPTEL',
  
    fileName: 'Nptel Python for Data Science.png',
  },
  {
    title: 'Programming in Java',
    issuer: 'NPTEL',
  
    fileName: 'Programming in Java (NPTEL).png',
  },
];

export const certificates = certificateFiles.map((cert) => ({
  ...cert,
  id: cert.fileName,
  image: `/certificates/${encodeURIComponent(cert.fileName)}`,
  url: `/certificates/${encodeURIComponent(cert.fileName)}`,
}));

export const hasCertificates = certificates.length > 0;
