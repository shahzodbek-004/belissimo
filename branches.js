const branches = [
    {
      name: "Bellissimo ECO",
      address: "Temur Malik koʻchasi, 3A",
      workingHours: "08:00 - 02:00",
    },
    {
      name: "Bellissimo Magic City",
      address: "Bobur koʻchasi, 174",
      workingHours: "09:50 - 23:00",
    },
    {
      name: "Bellissimo Sergeli",
      address: "Sergeli-VIII dahasi, 21A",
      workingHours: "Kechayu-kunduz",
    },
    {
      name: "Bellissimo Tashkent City",
      address: "Olmazor koʻchasi, 1A",
      workingHours: "09:50 - 22:59",
    },
    {
      name: "Bellissimo Aviasozlar",
      address: "Aviasozlar ko'chasi, 3 or-r: Aviaquruvchilar saroyi",
      workingHours: "10:00 - 02:00",
    },
    {
      name: "Bellissimo Samarqand Darvoza",
      address: "Qoratosh, 5а or-r: Samarqand Darvoza",
      workingHours: "10:00 - 23:00",
    },
    {
      name: "Bellissimo Maksim Gorkiy",
      address: "Buyuk Ipak Yoʻli koʻchasi, 123",
      workingHours: "10:00 - 23:00",
    },
    {
      name: "Bellissimo Huvaydo",
      address: "Maxtumquli 1-tor koʻchasi, 6",
      workingHours: "10:00 - 02:00",
    },
    {
      name: "Bellissimo Amir Temur",
      address: "Amir Temur shoh koʻchasi, 2",
      workingHours: "10:00 - 23:00",
    },
    {
      name: "Bellissimo C1",
      address: "O'zbekiston ovozi ko'chasi, 21",
      workingHours: "10:00 - 02:00",
    },
    {
      name: "Bellissimo Lunacharskiy",
      address: "ул. Буюк Ипак Йоли 230",
      workingHours: "10:00 - 02:00",
    },
    {
      name: "Bellissimo Chilonzor - 19",
      address: "Chilonzor 19-chi kvartal, 66/7",
      workingHours: "10:00 - 02:00",
    },
    {
      name: "Bellissimo Mirobod",
      address: "Mirobod ko'chasi, 35 or-r: Gospitalniy",
      workingHours: "10:00 - 23:00",
    },
    {
      name: "Bellissimo Depo",
      address: "Lutfi ko'chasi, 57: or-r Depo Mall",
      workingHours: "09:50 - 22:59",
    },
    {
      name: "Bellissimo Atlas",
      address: "Qatortol ko'chasi, 28 or-r: Atlas Mediapark",
      workingHours: "10:00 - 23:00",
    },
    {
      name: "Bellissimo Compass",
      address: "Toshkent halqa avtomobil yoʻli, 17 or-r: Compass",
      workingHours: "09:50 - 22:59",
    },
    {
      name: "Bellissimo MegaPlanet",
      address: "Yunusobod, 11-chi kvartal, 2B",
      workingHours: "Kechayu-kunduz",
    },
    {
      name: "Bellissimo Next",
      address: "Bobur ko'chasi, 6",
      workingHours: "09:50 - 22:59",
    },
    {
      name: "Bellissimo Ohunboboev",
      address: "ул. Келес Йули, 2/4 ор-р: Мечеть Абубакр Каффоли Шоший",
      workingHours: "10:00 - 02:00",
    },
    {
      name: "Bellissimo Kokcha",
      address: "Ko'kcha darvoza ko'chasi, 485",
      workingHours: "10:00 - 02:00",
    },
    {
      name: "Bellissimo Riviera",
      address: "Nodira ko'chasi, 4 or-r: Riviera",
      workingHours: "09:50 - 22:59",
    },
    {
      name: "Bellissimo Yangi Hayot",
      address: "Mehrigiyo koʻchasi, Toshkent",
      workingHours: "10:00 - 02:00",
    },
    {
      name: "Bellissimo Setor",
      address: "Uch Qahramon ko'chasi, Toshkent",
      workingHours: "10:00 - 23:00",
    },
    {
      name: "Bellissimo Beltepa",
      address: "Farobiy ko'chasi, 463",
      workingHours: "Kechayu-kunduz",
    },
    {
      name: "Bellissimo Seoul Mun",
      address: "Seul ko'chasi 183",
      workingHours: "10:00 - 23:00",
    },
    {
      name: "Bellissimo Parkentskiy",
      address: "Parkent koʻchasi, 131A",
      workingHours: "Kechayu-kunduz",
    },
    {
      name: "Bellissimo Algoritm",
      address: "Sharq dahasi, 25a",
      workingHours: "08:00 - 02:00",
    },
    {
      name: "Bellissimo Cristal",
      address: "Тошкент шахри, Юнусота кучаси, 22S",
      workingHours: "10:00 - 02:00",
    },
    {
      name: "Bellissimo Yangiobod",
      address: "Shohimardon ko'chasi",
      workingHours: "10:00 - 23:00",
    },
    {
      name: "Bellissimo Buz Bazar",
      address: "Sayram ko'chasi, Mirzo Ulugʻbek tumani",
      workingHours: "10:00 - 23:00",
    },
    {
      name: "Bellissimo City Mall",
      address: "Olmazor kochasi 2A",
      workingHours: "08:00 - 22:59",
    },
    {
      name: "Bellissimo Farhadskiy",
      address: "Lutfiy ko'chasi 21A",
      workingHours: "10:00 - 23:00",
    },
    {
      name: "Bellissimo Chilonzor 9",
      address: "Choʻponota koʻchasi",
      workingHours: "Kechayu-kunduz",
    },
    {
        name: "Bellissimo Oybek",
        address: "Oybek koʻchasi, 2",
        workingHours: "Kechayu-kunduz",
      },
      {
        name: "Bellissimo Asia",
        address: "Qipchoq koʻchasi",
        workingHours: "10:00 - 02:00",
      },
      {
        name: "Bellissimo Kuylyuk",
        address: "Tantana ko'chasi",
        workingHours: "Kechayu-kunduz",
      },
      {
        name: "Bellissimo Drujba",
        address: "Islom Karimov koʻchasi, 8/1",
        workingHours: "08:00 - 23:00",
      },
      {
        name: "Bellissimo Alpomish",
        address: "Beruniy ko'chasi, 41",
        workingHours: "09:50 - 22:59",
      },
      {
        name: "Bellissimo Alfraganus",
        address: "Qoʻshkoʻprik koʻchasi, 30",
        workingHours: "10:00 - 23:00",
      },
      {
        name: "Bellissimo Globus",
        address: "Zargarlik ko'chasi, 10А",
        workingHours: "10:00 - 23:00",
      },
      {
        name: "Bellissimo Nazarbek",
        address: "Aloqa ko'chasi, Nazarbek shaharchasi",
        workingHours: "10:00 - 02:00",
      },
      {
        name: "Bellissimo High-Town",
        address: "улица Янгишахар, 67",
        workingHours: "09:50 - 22:59",
      },
      {
        name: "Bellissimo GUM",
        address: "Chorsu maydoni, 3A",
        workingHours: "08:00 - 02:00",
      },
      {
        name: "Bellissimo Gagarin",
        address: "улица Чиланзар",
        workingHours: "10:00 - 23:00",
      },
      {
        name: "Bellissimo Poytaxt",
        address: "улица Сайилгох, 7",
        workingHours: "10:00 - 23:00",
      }
    ];
    
      
      export default branches;