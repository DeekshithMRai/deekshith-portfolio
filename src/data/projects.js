export const projects = [
  {
    id: 'agriculture-rental',
    title: 'Agriculture Equipment Rental Management System',
    shortDescription:
      'Built a database-driven platform for renting agricultural equipment with inventory management and user authentication.',
    image: '/images/Agriculture.png',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/DeekshithMRai/Mini-Project',
    liveDemo: null,
    features: [
      'Equipment inventory management',
      'User authentication and authorization',
      'Rental booking workflow',
      'Database-driven architecture',
    ],
    overview:
      'A comprehensive platform enabling farmers to rent agricultural equipment efficiently, with full inventory tracking and secure user management.',
    architecture:
      'Traditional LAMP-style architecture with PHP backend, MySQL database, and responsive frontend for equipment catalog and rental management.',
    challenges: [
      'Designing an intuitive rental workflow for non-technical users.',
      'Managing inventory state across concurrent rental requests.',
    ],
    learnings: [
      'Database schema design for rental-based systems.',
      'Building secure authentication flows from scratch.',
    ],
    gallery: ['/images/Agriculture.png'],
  },
  {
    id: 'smart-plate-vision',
    title: 'Smart Plate Vision API',
    shortDescription:
      'Created an API for real-time number plate detection and OCR-based text extraction using YOLOv8 and PyTesseract for security and traffic management.',
    image: '/images/Numberplate.png',
    techStack: ['Python', 'YOLOv8', 'PyTesseract', 'OpenCV', 'REST API'],
    github: 'https://github.com/DeekshithMRai/Smart-Plate-Vision-API',
    liveDemo: null,
    features: [
      'Real-time number plate detection',
      'OCR-based text extraction',
      'RESTful API endpoints',
      'YOLOv8 object detection pipeline',
    ],
    overview:
      'An AI-powered vision API that detects vehicle number plates in real-time and extracts readable text using computer vision and OCR technologies.',
    architecture:
      'Python-based REST API with YOLOv8 for detection and PyTesseract for OCR, designed for integration into security and traffic management systems.',
    challenges: [
      'Achieving reliable OCR accuracy across varying lighting and plate conditions.',
      'Optimizing inference speed for real-time detection.',
    ],
    learnings: [
      'Computer vision pipeline design with YOLOv8.',
      'Integrating OCR with object detection models.',
      'Building production-ready ML APIs.',
    ],
    gallery: ['/images/Numberplate.png'],
  },
  {
    id: 'lifestyle-store',
    title: 'Life Style Store — E-commerce Website',
    shortDescription:
      'Developed a full-stack e-commerce platform with secure authentication, product management, payment integration, and order tracking.',
    image: '/images/lifestylestore.png',
    techStack: ['React', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/DeekshithMRai/Life-Style-Store',
    liveDemo: null,
    features: [
      'Secure user authentication',
      'Product catalog and management',
      'Payment integration',
      'Order tracking system',
    ],
    overview:
      'A full-stack e-commerce platform built during an Internshala internship, featuring complete shopping workflows from browsing to checkout.',
    architecture:
      'React frontend with PHP/MySQL backend, RESTful API communication, and modular component architecture for product and order management.',
    challenges: [
      'Integrating payment flows securely.',
      'Building responsive UI across devices.',
    ],
    learnings: [
      'Full-stack e-commerce development patterns.',
      'React state management for complex shopping flows.',
    ],
    gallery: ['/images/lifestylestore.png'],
  },
  {
    id: 'iot-network',
    title: 'IoT Network Optimization',
    shortDescription:
      'Implemented real-time bandwidth management, device prioritization, and ESP32-based adaptive rate control for improved network efficiency.',
    image: '/images/NetworkOptimization.png',
    techStack: ['ESP32', 'IoT', 'C/C++', 'Network Protocols'],
    github: 'https://github.com/DeekshithMRai/IOT-Network-Optimization',
    liveDemo: null,
    features: [
      'Real-time bandwidth management',
      'Device prioritization',
      'ESP32 adaptive rate control',
      'Network efficiency monitoring',
    ],
    overview:
      'An IoT solution for optimizing network bandwidth through intelligent device prioritization and adaptive rate control on ESP32 hardware.',
    architecture:
      'ESP32-based edge devices with centralized bandwidth management logic, real-time monitoring, and adaptive control algorithms.',
    challenges: [
      'Balancing bandwidth allocation across heterogeneous IoT devices.',
      'Implementing reliable adaptive rate control on constrained hardware.',
    ],
    learnings: [
      'ESP32 firmware development.',
      'Network optimization strategies for IoT ecosystems.',
    ],
    gallery: ['/images/NetworkOptimization.png'],
  },
];
