import {axiosIcon, cssIcon, firebaseIcon, htmlIcon, reactRouteDomIcon, reactIcon, sassIcon, wordpressIcon, jsIcon} from '../assets/icon/programming'
import {excel, word, powerPoint} from '../assets/icon/office'
import {illustrator, photoshop} from '../assets/icon/design'
import {iconPlayMusic, iconCode, iconPlayGame} from '../assets/icon/hobbies'
import projectMovie from '../assets/project movie.png'
import projectMusic from '../assets/play music_.png'
import projectTodo from '../assets/Todo list.png'
import avatar from '../assets/avatar.jpg'
const profileVi = [
    {
        title: 'Thông tin bản thân',
        name: 'Ngô Đa Long',
        jobCurrent: 'Front-End',
        avatar: avatar,
        email: 'ngodalong166@gmail.com',
        phoneNumber: '0374.8958.77',
        address: 'Bình Thạnh, Hồ Chí Minh, Việt Nam',
        birthDay: '16/06'
    },
    {
        title: 'Về bản thân',
        text: [
            'Nhận ra bản thân có sở thích và khả năng về công nghệ, vào năm 2021. Sau một thời gian suy nghĩ và tìm hiểu, bản thân muốn trở thành Developer về Web/App.',
            'Trong quá trình tìm tài liệu học, bản thân may mắn gặp được website F8 và quyết định học theo lộ trình khóa học front-end.', 
            'Sau gần 8 tháng học tập, bản thân cảm thấy tự tin hơn rất nhiều về kỹ năng front-end của mình. Hiện tại đang mong muốn tìm việc trong môi trường chuyên nghiệp để phát triển kinh nghiệm và học hỏi nhiều hơn.'
        ]
    },
    {
        title:'Mục tiêu',
        shortTerm : {
            title: 'Mục tiêu ngắn hạn',
            text: 'Đi làm, nắm bắt công nghệ của công ty, nâng cao kỹ năng front-end, học redux và php.'
        },
        longTerm: {
            title: 'Mục tiêu dài hạn',
            text: 'Trở thành Senior Full-stack Developer'
            
        }
    },
    {
        title: 'Kỹ năng',
        programming: [
            {
                name: 'HTML',
                img: htmlIcon
            }, 
            {
                name: 'CSS',
                img: cssIcon
            },
            {
                name: 'JavaScript',
                img: jsIcon
            },
            {
                name: 'SASS',
                img: sassIcon
            }, 
            {
                name: 'ReactJS',
                img: reactIcon
            },
            {
                name: 'React Router DOM',
                img: reactRouteDomIcon
            }, 
            {
                name: 'Axios',
                img: axiosIcon
            }, 
            {
                name: 'Firebase (Realtime Database)',
                img: firebaseIcon
            }, 
            {
                name: 'Wordpress',
                img: wordpressIcon
            }
        ],
        design: [
            {
                name: 'Adobe Illustrator',
                img: illustrator
            }, 
            {
                name: 'Adobe Photoshop',
                img: photoshop
            }
        ],
        office: [
            {
                name: 'MS Excel',
                img: excel
            }, 
            {
                name: 'MS Word',
                img: word
            }, 
            {
                name: 'MS PowerPoint',
                img: powerPoint
            }
        ]
    },
    {
        title: 'Dự án',
        Projects: [
            {
                name: 'Website Xem phim',
                img: projectMovie,
                link: 'https://web-movie-virid.vercel.app/',
                github: 'https://github.com/nhockdragon012/web-movie',
                desc: ['ReactJS', 'React Router DOM', 'Axios', 'SCSS']
            },
            {
                name: 'Website Nghe nhạc',
                img: projectMusic,
                link: 'https://play-music-psi.vercel.app/',
                github: 'https://github.com/nhockdragon012/play-music.git',
                desc: ['HTMl', 'CSS', 'JS']
            },
            {
                name: 'Todo list',
                img: projectTodo,
                link: 'https://todo-list-seven-peach.vercel.app/',
                github: 'https://github.com/nhockdragon012/todo-list.git',
                desc: ['ReactJS', 'CSS']
            }
        ]
    },
    {
        title: 'Học vấn',
        school: [
            {
                name : 'THPT Nguyễn Trãi',
                time: '8/2015 - 8/2018',
                majored : '12/12',
                note: '',
                description: ''
            },
            {
                
                name : 'ĐH Công Nghệ TP.HCM-HUTECH',
                time: '8/2018 - 2021',
                majored : 'Thiết kế nội thất',
                note: 'pending',
                description: ''
            }
        ],
        courses: [
            { 
                name: 'Front-end F8',
                link: 'https://fullstack.edu.vn/',
                time: '~8/2021 - 2022'
            }
        ]
    },
    {
        title: 'Sở thích',
        Hobbies: [
            {
                text: 'Nghe nhạc giải trí',
                icon: iconPlayMusic
            },
            {
                text: 'Viết code',
                icon: iconCode, 
            },
            {
                text: 'Chơi game cùng bạn bè',
                icon : iconPlayGame
            }
        ]
    }
]
    

    
    
 

const profileEN = [
    {
        title: 'Information',
        name: 'Ngo Da Long',
        jobCurrent: 'Front-End',
        avatar: avatar,
        email: 'ngodalong166@gmail.com',
        phoneNumber: '0374.8958.77',
        address: 'Binh Thanh, Ho Chi Minh, Viet Nam',
        birthDay: '16/06'
    },
    {
        title: 'About Me',
        text: [
            'In the last year, I realized my interest in technology. After doing my research and gaining a better understanding of the career, I wanted to become a Developer of Web/App.', 
            'Fortunately, I came across a website called F8, offering web development courses while looking for programming materials. Subsequently, I decided to study the front-end courses.', 
            'After roughly eight months, I believe my front-end skills are better than ever before. Now, I want to find a job in a professional environment to attain more experience and knowledge to become a senior developer.'
        ]
    },
    {
        title:'Career Goals',
        shortTerm : {
            title: 'Short term goals',
            text: 'Working, improve front-end skills , study redux, UI libary, Back-end'
        },
        longTerm: {
            title: 'Long term goals',
            text: 'Becoming senior Full-Stack Developer'
            
        }
    },
    {
        title: 'Skills',
        programming: [
            {
                name: 'HTML',
                img: htmlIcon
            }, 
            {
                name: 'CSS',
                img: cssIcon
            },
            {
                name: 'JavaScript',
                img: jsIcon
            },
            {
                name: 'SASS',
                img: sassIcon
            }, 
            {
                name: 'ReactJS',
                img: reactIcon
            },
            {
                name: 'React Router DOM',
                img: reactRouteDomIcon
            }, 
            {
                name: 'Axios',
                img: axiosIcon
            }, 
            {
                name: 'Firebase (Realtime Database)',
                img: firebaseIcon
            }, 
            {
                name: 'Wordpress',
                img: wordpressIcon
            }
        ],
        design: [
            {
                name: 'Adobe Illustrator',
                img: illustrator
            }, 
            {
                name: 'Adobe Photoshop',
                img: photoshop
            }
        ],
        office: [
            {
                name: 'MS Excel',
                img: excel
            }, 
            {
                name: 'MS Word',
                img: word
            }, 
            {
                name: 'MS PowerPoint',
                img: powerPoint
            }
        ]
    },
    {
        title: 'Projects',
        Projects: [
            {
                name: 'Website Watch Movie',
                img: projectMovie,
                link: 'https://web-movie-virid.vercel.app/',
                github: 'https://github.com/nhockdragon012/web-movie',
                desc: ['ReactJS', 'React Router DOM', 'Axios', 'SCSS']
            },
            {
                name: 'Website Play Music',
                img: projectMusic,
                link: 'https://play-music-psi.vercel.app/',
                github: 'https://github.com/nhockdragon012/play-music.git',
                desc: ['HTMl', 'CSS', 'JS']
            },
            {
                name: 'Todo list',
                img: projectTodo,
                link: 'https://todo-list-seven-peach.vercel.app/',
                github: 'https://github.com/nhockdragon012/todo-list.git',
                desc: ['ReactJS', 'CSS']
            }
        ]
    },
    {
        title: 'Education',
        school: [
            {
                name : 'Nguyen Trai HighSchool',
                time: '8/2015 - 8/2018',
                majored : '12/12',
                note: '',
                description: ''
            },
            {
                name : 'Ho Chi Minh City University of Technology - Hutech',
                time: '8/2018 - 2021',
                majored : 'Furniture Design',
                note: 'pending',
                description: ''
            }
        ]
    },
    {
        title: 'Sở thích',
        Hobbies: [
            {
                text: 'Listen to music',
                icon: iconPlayMusic
            },
            {
                text: 'Write code',
                icon: iconCode, 
            },
            {
                text: 'Play games with my friends',
                icon : iconPlayGame
            }
        ]
    }
]

// Export data
export const getProfile = (isLanguage) => {
    if(isLanguage === 'vi') {
        return profileVi
    }else if(isLanguage === 'en') {
        return profileEN
    }
}
