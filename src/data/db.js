export const users = [
    {
        id: 1,
        name: 'Ariana Torres',
        city: 'Guadalajara',
        profileUrl: './profile_1.webp',
        imageURL: './outfit_1.webp',
        reactions: {
            like: { count: 128, status: false },
            love: { count: 45, status: false },
            dislike: { count: 3, status: false },
            comments: {
                status: false,
                list: [
                    {
                        id: 1,
                        user: 'Sofía Martínez',
                        photoUrl: './user1.webp',
                        text: '¡Te ves increíble! Ese vestido es perfecto para bodas.'
                    },
                    {
                        id: 2,
                        user: 'Carlos Ruiz',
                        photoUrl: './user1.webp',
                        text: 'Me gusta mucho el look, elegante y fresco.'
                    },
                    {
                        id: 3,
                        user: 'Laura Gómez',
                        photoUrl: './user1.webp',
                        text: 'No te preocupes, seguro luces genial 😉'
                    }
                ]
            }
        },
        shares: 42,
        event: 'Boda',
        datePosted: '2025-08-01',
        description: 'Mi mamá dice que este vestido me hace ver elegante, pero yo no estoy tan segura 😅 ¿Ustedes qué opinan?',
        tags: '#Boda #OutfitDeBoda'
    },
    {
        id: 2,
        name: 'Luis Hernández',
        city: 'Monterrey',
        profileUrl: './profile_2.webp',
        imageURL: './outfit_2.webp',
        reactions: {
            like: { count: 86, status: false },
            love: { count: 27, status: false },
            dislike: { count: 2, status: false },
            comments: {
                status: false,
                list: [
                    {
                        id: 1,
                        user: 'Marta López',
                        photoUrl: './user1.webp',
                        text: 'Un look casual que siempre funciona, bien hecho.'
                    },
                    {
                        id: 2,
                        user: 'Juan Pérez',
                        photoUrl: './user1.webp',
                        text: 'Para mí está perfecto, nada demasiado básico.'
                    }
                ]
            }
        },
        shares: 17,
        event: 'Casual',
        datePosted: '2025-08-02',
        description: 'Look casual para un día normal, pero con estilo. ¿Demasiado básico o bien? 🤔',
        tags: '#OutfitCasual #DíaADía'
    },
    {
        id: 3,
        name: 'Daniela Ruiz',
        city: 'CDMX',
        profileUrl: './profile_3.webp',
        imageURL: './outfit_3.webp',
        reactions: {
            like: { count: 203, status: false },
            love: { count: 88, status: false },
            dislike: { count: 1, status: false },
            comments: {
                status: false,
                list: [
                    {
                        id: 1,
                        user: 'Esteban Cruz',
                        photoUrl: './user1.webp',
                        text: '¡Felicidades! El toque atrevido te queda genial.'
                    },
                    {
                        id: 2,
                        user: 'Natalia Silva',
                        photoUrl: './user1.webp',
                        text: 'Muy original, me encanta tu estilo.'
                    },
                    {
                        id: 3,
                        user: 'Ricardo Díaz',
                        photoUrl: './user1.webp',
                        text: 'Ese outfit sí que destaca, ¡bien hecho!'
                    }
                ]
            }
        },
        shares: 64,
        event: 'Graduación',
        datePosted: '2025-08-03',
        description: '¡Finalmente graduada! 🎓 Quise algo diferente para este día especial. ¿Qué les parece el toque atrevido?',
        tags: '#Graduación #FinDeCiclo'
    },
    {
        id: 4,
        name: 'Pedro Sánchez',
        city: 'Puebla',
        profileUrl: './profile_4.webp',
        imageURL: './outfit_4.webp',
        reactions: {
            like: { count: 92, status: false },
            love: { count: 30, status: false },
            dislike: { count: 5, status: false },
            comments: {
                status: false,
                list: [
                    {
                        id: 1,
                        user: 'Verónica Castillo',
                        photoUrl: './user1.webp',
                        text: '¡Padrino con estilo! Ese flow no falla.'
                    },
                    {
                        id: 2,
                        user: 'Alfredo Morales',
                        photoUrl: './user1.webp',
                        text: 'El outfit está cool, nada que reprochar.'
                    }
                ]
            }
        },
        shares: 33,
        event: 'XV Años',
        datePosted: '2025-08-04',
        description: 'Fui padrino de pastel en unos XV, ¿creen que mi outfit sí era digno o me faltó flow? 😂',
        tags: '#XVaños #FormalPeroCool'
    },
    {
        id: 5,
        name: 'Fernanda López',
        city: 'León',
        profileUrl: './profile_5.webp',
        imageURL: './outfit_5.webp',
        reactions: {
            like: { count: 157, status: false },
            love: { count: 66, status: false },
            dislike: { count: 0, status: false },
            comments: {
                status: false,
                list: [
                    {
                        id: 1,
                        user: 'Julio Hernández',
                        photoUrl: './user1.webp',
                        text: 'Muy fiestera y con mucho estilo, me encanta.'
                    }
                ]
            }
        },
        shares: 51,
        event: 'Fiesta',
        datePosted: '2025-08-05',
        description: 'No sabía si era muy llamativo, pero al final me encantó 🪩 ¿Muy fiesta o muy yo?',
        tags: '#PartyTime #FiestaLook'
    }
];
