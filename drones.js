const drones = [
    // Серия DJI Mini (компактные)
    { id: 'mini5pro', name: 'DJI Mini 5 Pro', brand: 'DJI', wind: 10.5, gust: 13.5, rain: false, minTemp: -10, maxTemp: 40, category: 'mini' },
    { id: 'mini4pro', name: 'DJI Mini 4 Pro', brand: 'DJI', wind: 10.7, gust: 13, rain: false, minTemp: -10, maxTemp: 40, category: 'mini' },
    { id: 'mini3pro', name: 'DJI Mini 3 Pro', brand: 'DJI', wind: 10.0, gust: 12.5, rain: false, minTemp: -10, maxTemp: 40, category: 'mini' },
    { id: 'mini2', name: 'DJI Mini 2', brand: 'DJI', wind: 8.5, gust: 10.5, rain: false, minTemp: 0, maxTemp: 40, category: 'mini' },
    { id: 'minise', name: 'DJI Mini SE', brand: 'DJI', wind: 8.0, gust: 10.0, rain: false, minTemp: 0, maxTemp: 40, category: 'mini' },

    // Серия DJI Air
    { id: 'air3', name: 'DJI Air 3', brand: 'DJI', wind: 12.0, gust: 16.0, rain: false, minTemp: -10, maxTemp: 40, category: 'air' },
    { id: 'air2s', name: 'DJI Air 2S', brand: 'DJI', wind: 10.0, gust: 14.0, rain: false, minTemp: -10, maxTemp: 40, category: 'air' },
    { id: 'air2', name: 'DJI Air 2', brand: 'DJI', wind: 10.0, gust: 14.0, rain: false, minTemp: -10, maxTemp: 40, category: 'air' },

    // Серия DJI Mavic
    { id: 'mavic4pro', name: 'DJI Mavic 4 Pro', brand: 'DJI', wind: 14.0, gust: 18.0, rain: false, minTemp: -10, maxTemp: 40, category: 'mavic' },
    { id: 'mavic3pro', name: 'DJI Mavic 3 Pro', brand: 'DJI', wind: 12.0, gust: 15, rain: false, minTemp: -10, maxTemp: 40, category: 'mavic' },
    { id: 'mavic3', name: 'DJI Mavic 3', brand: 'DJI', wind: 12.0, gust: 15, rain: false, minTemp: -10, maxTemp: 40, category: 'mavic' },
    { id: 'mavic2pro', name: 'DJI Mavic 2 Pro', brand: 'DJI', wind: 10.0, gust: 14.0, rain: false, minTemp: -10, maxTemp: 40, category: 'mavic' },
    { id: 'mavic2zoom', name: 'DJI Mavic 2 Zoom', brand: 'DJI', wind: 10.0, gust: 14.0, rain: false, minTemp: -10, maxTemp: 40, category: 'mavic' },
    { id: 'mavicpro', name: 'DJI Mavic Pro', brand: 'DJI', wind: 8.0, gust: 10.0, rain: false, minTemp: 0, maxTemp: 40, category: 'mavic' },

    // FPV дроны
    { id: 'avata2', name: 'DJI Avata 2', brand: 'DJI', wind: 10.5, gust: 14.0, rain: false, minTemp: -5, maxTemp: 35, category: 'fpv' },
    { id: 'avata', name: 'DJI Avata', brand: 'DJI', wind: 10.0, gust: 13.5, rain: false, minTemp: -5, maxTemp: 35, category: 'fpv' },
    { id: 'fpv', name: 'DJI FPV', brand: 'DJI', wind: 12.0, gust: 16.0, rain: false, minTemp: -5, maxTemp: 35, category: 'fpv' },

    // Профессиональные серии
    { id: 'inspire3', name: 'DJI Inspire 3', brand: 'DJI', wind: 15.0, gust: 20.0, rain: true, minTemp: -20, maxTemp: 50, category: 'pro' },
    { id: 'inspire2', name: 'DJI Inspire 2', brand: 'DJI', wind: 12.0, gust: 16.0, rain: true, minTemp: -20, maxTemp: 50, category: 'pro' },
    { id: 'matrice30t', name: 'DJI Matrice 30T', brand: 'DJI', wind: 15.0, gust: 20, rain: true, minTemp: -20, maxTemp: 50, category: 'pro' },
    { id: 'matrice350', name: 'DJI Matrice 350', brand: 'DJI', wind: 12.0, gust: 18, rain: true, minTemp: -20, maxTemp: 50, category: 'pro' },
    { id: 'matrice300', name: 'DJI Matrice 300 RTK', brand: 'DJI', wind: 15.0, gust: 20.0, rain: true, minTemp: -20, maxTemp: 50, category: 'pro' },

    // Другие бренды
    { id: 'autelEvo2', name: 'Autel EVO II V3', brand: 'Autel', wind: 12.0, gust: 17, rain: false, minTemp: -10, maxTemp: 40, category: 'other' },
    { id: 'autelEvoLite', name: 'Autel EVO Lite+', brand: 'Autel', wind: 10.0, gust: 14.0, rain: false, minTemp: -10, maxTemp: 40, category: 'other' },
    { id: 'skydio2', name: 'Skydio 2+', brand: 'Skydio', wind: 10.0, gust: 13.0, rain: false, minTemp: 0, maxTemp: 40, category: 'other' },
    { id: 'parrotAnafi', name: 'Parrot Anafi USA', brand: 'Parrot', wind: 15.0, gust: 20.0, rain: true, minTemp: -10, maxTemp: 50, category: 'other' },
    { id: 'fpvCustom', name: 'FPV Custom 5"', brand: 'Custom', wind: 15.0, gust: 25, rain: false, minTemp: -5, maxTemp: 40, category: 'fpv' }
];
