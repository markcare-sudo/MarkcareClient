const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/utils/seoMapping.js');
let fileContent = fs.readFileSync(filePath, 'utf8');

const data = {
  '/services/elevators': 'Elevator Installation & Maintenance',
  '/services/ro-water-purifiers': 'RO Water Purifiers Sales & Service',
  '/services/solar-power-systems': 'Solar Power System Installation',
  '/services/ac-systems': 'AC Installation & Maintenance Services',
  '/services/water-treatment-plant': 'Water Treatment Plant Installation',
  '/services/tv-installation-service': 'TV Installation Service',
  '/services/kitchen-chimney-service': 'Kitchen Chimney Service',
  '/services/diesel-generators': 'Diesel Generator Service',
  '/services/elevators-lifts': 'Elevator Services & Lifts',
  '/services/industrial-ro-systems': 'Industrial RO Systems',
  '/services/water-softening-plant': 'Water Softening Plant'
};

const regex = /\"(.*?)\":\s*\[\s*([\s\S]*?)\s*\]/g;

let newContent = fileContent.replace(regex, (match, pathStr, keywordsStr) => {
    let baseService = '';
    let city = '';
    
    // Extact city and service
    if (pathStr.includes('/bangalore/')) {
       city = 'Bangalore';
       baseService = data['/services/' + pathStr.split('/services/')[1]] || 'Service';
    } else if (pathStr.includes('/chennai/')) {
       city = 'Chennai';
       baseService = data['/services/' + pathStr.split('/services/')[1]] || 'Service';
    } else {
       baseService = data[pathStr] || 'Service';
    }

    let titleText = city ? `${baseService} in ${city} | MarkCare` : `${baseService} | MarkCare`;
    let descText = city ? `Top-rated ${baseService.toLowerCase()} and maintenance services in ${city}. Book an expert today.` : `Professional ${baseService.toLowerCase()}, installation, and maintenance services. Book an expert today.`;

    return `"${pathStr}": {\n    title: "${titleText}",\n    description: "${descText}",\n    keywords: [\n      ${keywordsStr}\n    ]\n  }`;
});

fs.writeFileSync(filePath, newContent);
console.log('Transformation complete!');
