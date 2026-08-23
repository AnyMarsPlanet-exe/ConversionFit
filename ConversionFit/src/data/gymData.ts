import { Plan, Trainer, GymArea, FacilityImage, Transformation, Testimonial, FAQItem, DaySchedule, GymLocation } from '../types';

export const GYM_LOCATIONS: GymLocation[] = [
  {
    id: 'valledupar',
    name: 'Sede Principal Valledupar',
    shortName: 'Sede Valledupar',
    tagline: 'Sede de 3 Plantas de Entrenamiento & Musculación',
    city: 'Valledupar',
    department: 'Cesar',
    address: 'Carrera 11 #9-184, Valledupar, Cesar, Colombia',
    addressShort: 'Carrera 11 #9-184, Valledupar',
    phone: '+57 315 293 2226',
    phoneFormatted: '315 293 2226',
    whatsappUrl: 'https://wa.me/573152932226?text=Hola%20Conversion%20Fit%20Valledupar,%20deseo%20informaci%C3%B3n%20sobre%20la%20Sede%20de%203%20Plantas.',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Carrera+11+%239-184,+Valledupar,+Colombia',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Carrera%2011%20%239-184,%20Valledupar,%20Colombia&t=&z=16&ie=UTF8&iwloc=&output=embed',
    badge: '3 PLANTAS • VALLEDUPAR',
    features: [
      'Planta 1: Musculación Pesada & Peso Libre',
      'Planta 2: Zona Cardio Climatizada & Clases Personalizadas',
      'Planta 3: Box CrossFit & Entrenamiento Libre',
      'Evaluación Corporal por Bioimpedancia',
      'Parqueadero vigilado para vehículos y motos'
    ],
    hours: {
      weekdays: '5:00 AM - 10:00 PM',
      saturdays: '6:00 AM - 6:00 PM',
      sundays: '7:00 AM - 1:00 PM',
    },
    photo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000',
    isMain: true
  },
  {
    id: 'fonseca',
    name: 'Sede Fonseca (La Guajira)',
    shortName: 'Sede Fonseca',
    tagline: 'Conversión Fit GYM Fonseca',
    city: 'Fonseca',
    department: 'La Guajira',
    address: 'Calle 11 #15-17 / Cra 11 Esquina, Fonseca, La Guajira, Colombia',
    addressShort: 'Calle 11 #15-17, Fonseca, La Guajira',
    phone: '+57 315 293 2226',
    phoneFormatted: '315 293 2226',
    whatsappUrl: 'https://wa.me/573152932226?text=Hola%20Conversion%20Fit%20Fonseca,%20deseo%20informaci%C3%B3n%20sobre%20la%20Sede%20Fonseca.',
    googleMapsUrl: 'https://share.google/5QQX1Zq30Lo5AX7yk',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Calle%2011%20%2315-17,%20Fonseca,%20La%20Guajira,%20Colombia&t=&z=16&ie=UTF8&iwloc=&output=embed',
    badge: 'SEDE FONSECA • LA GUAJIRA',
    features: [
      'Equipamiento de Musculación y Fuerza Completo',
      'Zona Cardiovascular de Alto Rendimiento',
      'Área de Entrenamiento Funcional & Resistencia',
      'Acompañamiento por Entrenadores Calificados',
      'Excelente ubicación céntrica con fácil acceso'
    ],
    hours: {
      weekdays: '5:00 AM - 10:00 PM',
      saturdays: '6:00 AM - 6:00 PM',
      sundays: '7:00 AM - 1:00 PM',
    },
    photo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1000',
    isMain: false
  }
];

export const GYM_INFO = {
  name: 'Conversion Fit',
  handle: '@conversion_fit.co',
  tagline: 'CENTRO ESPECIALIZADO EN ENTRENAMIENTOS DE RESISTENCIA',
  location: 'Carrera 11 #9-184, Valledupar (Sede Principal) & Calle 11 #15-17, Fonseca',
  addressShort: 'Valledupar (Cra 11 #9-184) • Fonseca (Cl 11 #15-17)',
  phone: '+57 315 293 2226',
  phoneFormatted: '315 293 2226',
  email: 'contacto@conversionfit.co',
  whatsappUrl: 'https://wa.me/573152932226?text=Hola%20Conversion%20Fit,%20quiero%20informaci%C3%B3n%20sobre%20la%20preinscripci%C3%B3n%20en%20la%20App%20M%C3%B3vil.',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Carrera+11+%239-184,+Valledupar,+Colombia',
  googleMapsFonsecaUrl: 'https://share.google/5QQX1Zq30Lo5AX7yk',
  apps: {
    playStore: 'https://play.google.com/store/apps/details?id=com.quirasoftware.conversionfit&hl=es_EC',
    appStore: 'https://apps.apple.com/co/app/conversion-fit/id6578075371'
  },
  appStoreLinks: {
    playStore: 'https://play.google.com/store/apps/details?id=com.quirasoftware.conversionfit&hl=es_EC',
    appStore: 'https://apps.apple.com/co/app/conversion-fit/id6578075371'
  },
  hours: {
    weekdays: '5:00 AM - 10:00 PM',
    saturdays: '6:00 AM - 6:00 PM',
    sundays: '7:00 AM - 1:00 PM',
  },
  social: {
    instagram: 'https://www.instagram.com/conversion_fit.co/',
    facebook: 'https://www.facebook.com/conversionfit.co',
    whatsapp: 'https://wa.me/573152932226'
  }
};

export const GYM_STATS = [
  { value: 3, label: 'Plantas de Entrenamiento', prefix: '', suffix: '' },
  { value: 1800, label: 'Transformaciones Exitosas', prefix: '+', suffix: '' },
  { value: 96, label: 'Índice de Recomposición', prefix: '', suffix: '%' },
  { value: 100, label: 'Acompañamiento por Coaches', prefix: '', suffix: '%' }
];

export const PLANS: Plan[] = [
  {
    id: 'plan-mensual',
    name: 'PLAN MENSUAL CONVERSIÓN FIT',
    tagline: 'Tu plan mensual completo para entrenar en Valledupar con acceso total a las 3 plantas.',
    priceCOP: '$80.000',
    period: '/ Mes',
    popular: true,
    color: 'border-[#FFE500]',
    ctaText: 'PREINSCRIBIRME EN LA APP',
    features: [
      'Preinscripción directa desde la App Oficial (iOS y Android)',
      'Acceso a las 3 plantas de entrenamiento (Lunes a Domingo)',
      'Planta 1: Musculación principal & Peso Libre',
      'Planta 2: Cardio & Clases Personalizadas',
      'Planta 3: Área de CrossFit & Entrenamiento Libre',
      'Evaluación inicial de composición corporal (Grasa % y Masa Muscular)',
      'Atención y guía de rutina por parte de los coaches en sala'
    ]
  },
  {
    id: 'plan-trimestral',
    name: 'PLAN TRIMESTRAL AHORRO',
    tagline: 'Compromiso a mediano plazo para asegurar tus resultados físicos con descuento.',
    priceCOP: '$220.000',
    period: '/ 3 Meses ($73k/mes)',
    popular: false,
    color: 'border-[#FFE500]',
    ctaText: 'PREINSCRIBIRME EN LA APP',
    features: [
      'Todo lo incluido en el Plan Mensual de $80.000',
      'Acceso total a las 3 plantas de la sede',
      '3 Evaluaciones periódicas de composición corporal por bioimpedancia',
      'Pase de invitado especial 1 día al mes',
      'Acompañamiento prioritario por entrenadores en sala',
      'Congelación de membresía hasta por 10 días'
    ]
  },
  {
    id: 'plan-semestral',
    name: 'PLAN SEMESTRAL',
    tagline: 'La opción con la tarifa más económica por mes para consolidar tu mejor versión.',
    priceCOP: '$420.000',
    period: '/ 6 Meses ($70k/mes)',
    popular: false,
    color: 'border-zinc-700',
    ctaText: 'PREINSCRIBIRME EN LA APP',
    features: [
      'Acceso ilimitado a las 3 plantas durante 6 meses',
      'Evaluaciones mensuales de porcentaje de grasa y músculo',
      'Acompañamiento continuo en tus rutinas de fuerza y CrossFit',
      'Ahorro del 12% sobre la tarifa mensual individual',
      'Congelación de membresía hasta por 20 días',
      'Sin contratos obligatorios ni costos de inscripción extras'
    ]
  }
];

export const AREAS: GymArea[] = [
  {
    id: 'planta-1-musculacion',
    title: 'Planta 1: Entrenamiento Principal & Musculación',
    description: 'Planta principal equipada con maquinaria biomecánica selectorizada, amplia zona de peso libre, mancuernas profesionales y bancos multiangulares para trabajo de hipertrofia.',
    iconName: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000',
    equipmentList: ['Mancuernas de uretano profesionales', 'Prensas de piernas 45° y Hack Squat', 'Bancos ajustables multiangulares', 'Poleas biomecánicas con agarres especiales'],
    highlight: 'Planta principal de fuerza y sobrecarga progresiva.'
  },
  {
    id: 'planta-2-cardio-personalizadas',
    title: 'Planta 2: Cardio & Clases Personalizadas',
    description: 'Segunda planta acondicionada para entrenamiento cardiovascular intenso y desarrollo de clases personalizadas asistidas por entrenadores.',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1000',
    equipmentList: ['Caminadoras profesionales con inclinación', 'Bicicletas de spinning ajustables', 'Elípticas ergonómicas', 'Espacio para sesiones personalizadas 1 a 1'],
    highlight: 'Climatización total e instrucción en área de cardio.'
  },
  {
    id: 'planta-3-crossfit-libre',
    title: 'Planta 3: CrossFit & Entrenamiento Libre',
    description: 'Tercera planta abierta con piso de alto impacto diseñada para WODs de CrossFit, calistenia, ejercicios funcionales y entrenamiento libre.',
    iconName: 'Flame',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1000',
    equipmentList: ['Barras olímpicas y discos bumper', 'Kettlebells y Wall Balls', 'Trineos de empuje (Prowler)', 'Cuerdas de batalla y estructuras de suspensión'],
    highlight: 'Zona versátil para alta intensidad y libertad de movimiento.'
  },
  {
    id: 'valoracion-fisica',
    title: 'Zona de Valoración & Antropometría',
    description: 'Punto de control biológico donde los entrenadores miden tu grasa corporal y masa magra mediante bioimpedancia para estructurar tu entrenamiento.',
    iconName: 'UserCheck',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000',
    equipmentList: ['Escáner de Bioimpedancia Profesional', 'Plicómetro para pliegues cutáneos', 'Cinta antropométrica', 'Software de análisis corporal'],
    highlight: 'Monitoreo periódico directo por tus entrenadores.'
  }
];

export const FACILITIES_GALLERY: FacilityImage[] = [
  {
    id: 'fac-1',
    title: 'Planta 1: Entrenamiento Principal',
    category: 'pesas',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
    description: 'Piso principal de musculación, bancos y peso libre para sobrecarga progresiva.'
  },
  {
    id: 'fac-2',
    title: 'Planta 2: Zona Cardio & Clases Personalizadas',
    category: 'cardio',
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1200',
    description: 'Maquinaria cardiovascular climatizada y área para sesiones dirigidas.'
  },
  {
    id: 'fac-3',
    title: 'Planta 3: Área de CrossFit & Entrenamiento Libre',
    category: 'cross',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200',
    description: 'Espacio de alto impacto para CrossFit, funcional y entrenamiento independiente.'
  },
  {
    id: 'fac-4',
    title: 'Zona de Valoración Corporal',
    category: 'vip',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1200',
    description: 'Punto de control de bioimpedancia para registrar tu pérdida de grasa y ganancia de músculo.'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'trainer-1',
    name: 'Head Coach Conversion',
    role: 'Director de Entrenamiento & Biomecánica',
    specialty: 'Fuerza, Biomecánica & Hipertrofia',
    experience: '10+ Años transformando cuerpos',
    certifications: ['Especialista en Recomposición Corporal', 'Certificado en Biomecánica de Fuerza', 'Coach de Musculación'],
    photo: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=800',
    bio: 'Líder del equipo de entrenadores de Conversion Fit en Valledupar. Enfocado en técnica perfecta de ejecución, hipertrofia sin lesiones y motivación.',
    instagram: 'https://www.instagram.com/conversion_fit.co/'
  },
  {
    id: 'trainer-2',
    name: 'Coach Clases Personalizadas',
    role: 'Entrenadora de Planta 2 & Cardio',
    specialty: 'Acondicionamiento Físico & Sesiones Personalizadas',
    experience: '7+ Años de Experiencia en Sala',
    certifications: ['Entrenamiento Personalizado', 'Acondicionamiento Físico Integrado'],
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    bio: 'Encargada de guiar las sesiones personalizadas y optimizar el rendimiento cardiovascular en la Planta 2.',
    instagram: 'https://www.instagram.com/conversion_fit.co/'
  },
  {
    id: 'trainer-3',
    name: 'Coach de CrossFit & Funcional',
    role: 'Instructor Planta 3 (CrossFit & Libre)',
    specialty: 'CrossFit, WODs & Acondicionamiento Metabólico',
    experience: '6+ Años de Experiencia',
    certifications: ['Coach CrossFit Level 1', 'Entrenamiento Funcional de Alta Intensidad'],
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    bio: 'Supervisa el área de la Planta 3 asegurando la correcta ejecución de movimientos gimnásticos y levantamientos en CrossFit.',
    instagram: 'https://www.instagram.com/conversion_fit.co/'
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 'trans-1',
    name: 'Santiago M.',
    age: 28,
    timeframe: '60 Días - Plan Recomposición',
    weightLoss: '-14 kg de Grasa',
    muscleGain: '+4 kg Masa Magra',
    beforeImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800',
    testimonial: 'Increíble el cambio en solo 2 meses con el Plan Mensual de Conversion Fit en Valledupar. El plan de alimentación fácil de seguir y la rutina guiada marcaron la diferencia.'
  },
  {
    id: 'trans-2',
    name: 'Mariana G.',
    age: 32,
    timeframe: '90 Días - Plan Trimestral',
    weightLoss: '-10 kg de Grasa',
    muscleGain: 'Tonificación Corporal Completa',
    beforeImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800',
    testimonial: 'Pensé que tenía que aguantar hambre para bajar de peso. En Conversion Fit me enseñaron a comer las cantidades correctas y entrenar la fuerza.'
  },
  {
    id: 'trans-3',
    name: 'Carlos B.',
    age: 38,
    timeframe: 'Plan Mensual $80.000',
    weightLoss: '-7 kg de Grasa',
    muscleGain: '+2 kg de Definición',
    beforeImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    testimonial: 'El seguimiento constante por WhatsApp y la guía nutricional fueron clave. Por solo $80.000 al mes logré lo que no pude en todo un año solo.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Andrés Camilo V.',
    occupation: 'Empresario en Valledupar',
    rating: 5,
    comment: 'La combinación de tarifa accesible ($80.000/mes) + entrenamiento enfocado en recomposición es la mejor decisión que he tomado. Las instalaciones son top.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    planUsed: 'Plan Mensual $80.000'
  },
  {
    id: 'test-2',
    name: 'Laura Sofía M.',
    occupation: 'Profesional',
    rating: 5,
    comment: 'Sigo a @conversion_fit.co en Instagram desde hace meses y cuando fui a la sede en la Cra 11 la experiencia superó mis expectativas. ¡10/10!',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300',
    planUsed: 'Plan Trimestral'
  },
  {
    id: 'test-3',
    name: 'David R.',
    occupation: 'Ingeniero',
    rating: 5,
    comment: 'Baja de peso real con medidas comprobadas en la bioimpedancia. No te venden humo, te enseñan la disciplina y te acompañan en cada paso.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    planUsed: 'Plan Mensual $80.000'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: '¿Cuánto cuesta la mensualidad en Conversion Fit Valledupar?',
    answer: 'Nuestra tarifa mensual actual es de solo $80.000 COP al mes. Incluye acceso completo a las 3 plantas (Musculación principal, Cardio & Clases personalizadas, y CrossFit & Entrenamiento libre), valoración física inicial por nuestros entrenadores y acompañamiento en sala.',
    category: 'Tarifas'
  },
  {
    id: 'faq-2',
    question: '¿Cómo están distribuidas las 3 plantas del gimnasio?',
    answer: 'La Planta 1 es la planta principal de entrenamiento de musculación y peso libre. La Planta 2 está dedicada a cardio y clases personalizadas. La Planta 3 es la zona de CrossFit, funcionalidad y entrenamiento libre.',
    category: 'Instalaciones'
  },
  {
    id: 'faq-3',
    question: '¿Cuentan con servicio de nutricionista profesional?',
    answer: 'Contamos con entrenadores capacitados en sala que te guían con la rutina, técnica de ejercicios y recomendaciones generales para tu objetivo, pero no disponemos de consulta con nutricionista clínico en la sede.',
    category: 'Servicios'
  },
  {
    id: 'faq-4',
    question: '¿Puedo entrenar si soy principiante y nunca he ido al gimnasio?',
    answer: '¡Por supuesto! La mayoría de nuestros afiliados inician desde cero. Nuestros entrenadores de sala te enseñarán la técnica correcta en cada máquina y te guiarán paso a paso en las 3 plantas.',
    category: 'Entrenamiento'
  },
  {
    id: 'faq-5',
    question: '¿Cómo me inscribo al Plan Mensual de $80.000?',
    answer: 'Puedes solicitar tu inscripción directamente desde esta página web o escribirnos directamente a nuestro WhatsApp o Instagram @conversion_fit.co para agendar tu primera visita.',
    category: 'Inscripción'
  }
];

export const WEEKLY_SCHEDULE: DaySchedule[] = [
  {
    day: 'Lunes a Viernes',
    hours: '5:00 AM - 10:00 PM',
    sessions: [
      { time: '05:30 AM', className: 'WOD CrossFit & Funcional', trainer: 'Coach Planta 3', area: 'Planta 3: CrossFit', intensity: 'Alta' },
      { time: '07:00 AM', className: 'Fuerza & Musculación Guiada', trainer: 'Head Coach Conversion', area: 'Planta 1: Musculación', intensity: 'Alta' },
      { time: '09:00 AM', className: 'Cardio & Clases Personalizadas', trainer: 'Coach Planta 2', area: 'Planta 2: Cardio', intensity: 'Alta' },
      { time: '05:00 PM', className: 'Entrenamiento de Hipertrofia', trainer: 'Head Coach Conversion', area: 'Planta 1: Musculación', intensity: 'Alta' },
      { time: '06:30 PM', className: 'CrossFit & Entrenamiento Libre', trainer: 'Coach Planta 3', area: 'Planta 3: CrossFit', intensity: 'Alta' },
      { time: '08:00 PM', className: 'Musculación & Cardio Evening', trainer: 'Coach de Guardia', area: 'Plantas 1 y 2', intensity: 'Media' }
    ]
  },
  {
    day: 'Sábados',
    hours: '6:00 AM - 6:00 PM',
    sessions: [
      { time: '07:00 AM', className: 'CrossFit WOD Especial Fin de Semana', trainer: 'Equipo Conversion Fit', area: 'Planta 3: CrossFit', intensity: 'Alta' },
      { time: '09:00 AM', className: 'Valoración Corporal & Antropometría', trainer: 'Equipo de Entrenadores', area: 'Zona Valoración', intensity: 'Media' },
      { time: '11:00 AM', className: 'Fuerza & Hipertrofia Sabatina', trainer: 'Head Coach Conversion', area: 'Planta 1: Musculación', intensity: 'Media' }
    ]
  },
  {
    day: 'Domingos y Festivos',
    hours: '7:00 AM - 1:00 PM',
    sessions: [
      { time: '08:00 AM', className: 'Entrenamiento Libre en 3 Plantas', trainer: 'Coach de Guardia', area: 'Sede Valledupar', intensity: 'Media' },
      { time: '10:00 AM', className: 'Cardio & Calistenia Libre', trainer: 'Coach de Guardia', area: 'Plantas 2 y 3', intensity: 'Media' }
    ]
  }
];
