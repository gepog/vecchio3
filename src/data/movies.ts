import { Movie, ContentRow } from '../types';

export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'The Digital Revolution',
  description: 'A groundbreaking documentary exploring how artificial intelligence and digital transformation are reshaping our world. From smart cities to autonomous vehicles, witness the future unfold before your eyes.',
  genre: ['Documentary', 'Technology', 'Future'],
  year: 2024,
  rating: 'PG-13',
  duration: '2h 15m',
  thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
  backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920',
  videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  isFeatured: true,
  likes: 15420
};

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Quantum Horizons',
    description: 'A mind-bending sci-fi thriller that explores the boundaries of quantum physics and parallel universes.',
    genre: ['Sci-Fi', 'Thriller', 'Drama'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 28m',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 8924
  },
  {
    id: '2',
    title: 'Neon Dreams',
    description: 'A cyberpunk adventure set in a dystopian future where reality and virtual worlds collide.',
    genre: ['Action', 'Cyberpunk', 'Adventure'],
    year: 2024,
    rating: 'R',
    duration: '2h 15m',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 12156
  },
  {
    id: '3',
    title: 'The Last Algorithm',
    description: 'When AI becomes sentient, humanity faces its greatest challenge yet in this gripping techno-thriller.',
    genre: ['Thriller', 'Sci-Fi', 'Drama'],
    year: 2023,
    rating: 'PG-13',
    duration: '2h 5m',
    thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 9847
  },
  {
    id: '4',
    title: 'Digital Shadows',
    description: 'A psychological thriller about identity theft in the digital age and the dark web\'s hidden secrets.',
    genre: ['Thriller', 'Crime', 'Mystery'],
    year: 2024,
    rating: 'R',
    duration: '1h 58m',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 7234
  },
  {
    id: '5',
    title: 'Code Red',
    description: 'A high-stakes cyber warfare drama where hackers battle for control of global infrastructure.',
    genre: ['Action', 'Thriller', 'Tech'],
    year: 2023,
    rating: 'PG-13',
    duration: '2h 12m',
    thumbnail: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 11567
  },
  {
    id: '6',
    title: 'Virtual Reality',
    description: 'When the line between virtual and reality blurs, a gamer must escape a deadly digital prison.',
    genre: ['Sci-Fi', 'Action', 'Adventure'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 3m',
    thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 13892
  },
  {
    id: '7',
    title: 'The Network',
    description: 'A journalist uncovers a conspiracy involving social media manipulation and global surveillance.',
    genre: ['Thriller', 'Drama', 'Mystery'],
    year: 2023,
    rating: 'R',
    duration: '2h 18m',
    thumbnail: 'https://images.pexels.com/photos/7988215/pexels-photo-7988215.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/7988215/pexels-photo-7988215.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 6789
  },
  {
    id: '8',
    title: 'Binary Hearts',
    description: 'A romantic drama about love in the age of artificial intelligence and digital relationships.',
    genre: ['Romance', 'Drama', 'Sci-Fi'],
    year: 2024,
    rating: 'PG-13',
    duration: '1h 52m',
    thumbnail: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 9234
  },
  {
    id: '9',
    title: 'Firewall',
    description: 'A cybersecurity expert races against time to prevent a digital apocalypse.',
    genre: ['Action', 'Thriller', 'Tech'],
    year: 2023,
    rating: 'PG-13',
    duration: '2h 8m',
    thumbnail: 'https://images.pexels.com/photos/7988674/pexels-photo-7988674.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/7988674/pexels-photo-7988674.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 8456
  },
  {
    id: '10',
    title: 'Cloud Nine',
    description: 'A comedy about a tech startup that accidentally creates the world\'s most advanced AI.',
    genre: ['Comedy', 'Tech', 'Adventure'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 12789
  },
  {
    id: '11',
    title: 'Data Stream',
    description: 'A documentary exploring the hidden world of data mining and digital privacy.',
    genre: ['Documentary', 'Tech', 'Educational'],
    year: 2023,
    rating: 'PG',
    duration: '1h 38m',
    thumbnail: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 5432
  },
  {
    id: '12',
    title: 'The Upload',
    description: 'A sci-fi thriller about consciousness transfer and the ethics of digital immortality.',
    genre: ['Sci-Fi', 'Thriller', 'Philosophy'],
    year: 2024,
    rating: 'R',
    duration: '2h 22m',
    thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 14567
  }
];

export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: movies.slice(0, 6)
  },
  {
    id: 'new-releases',
    title: 'New Releases',
    movies: movies.slice(6, 12)
  },
  {
    id: 'ai-tech',
    title: 'AI & Technology',
    movies: [
      {
        id: 'ai-1',
        title: 'Neural Networks',
        description: 'Explore the fascinating world of artificial intelligence and machine learning through this comprehensive documentary series.',
        genre: ['Documentary', 'Technology', 'AI'],
        year: 2024,
        rating: 'PG',
        duration: '45m',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 18234
      },
      {
        id: 'ai-2',
        title: 'Data Import Revolution',
        description: 'A deep dive into modern data management systems and how they\'re transforming business operations worldwide.',
        genre: ['Documentary', 'Business', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '52m',
        thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 15678
      },
      {
        id: 'ai-3',
        title: 'Trending Analytics',
        description: 'Discover how data analytics and trending algorithms are shaping the future of digital content and user experience.',
        genre: ['Documentary', 'Analytics', 'Digital'],
        year: 2024,
        rating: 'PG',
        duration: '48m',
        thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 21456
      },
      {
        id: 'ai-4',
        title: 'Digital Economy',
        description: 'An in-depth analysis of how digital currencies, education, and communication are revolutionizing the global economy.',
        genre: ['Documentary', 'Economics', 'Digital'],
        year: 2024,
        rating: 'PG',
        duration: '55m',
        thumbnail: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        backdrop: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 19823
      },
      {
        id: 'ai-5',
        title: 'Machine Learning Fundamentals',
        description: 'A beginner-friendly introduction to machine learning concepts and their real-world applications.',
        genre: ['Educational', 'Technology', 'AI'],
        year: 2024,
        rating: 'PG',
        duration: '42m',
        thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 16789
      },
      {
        id: 'ai-6',
        title: 'Future of Computing',
        description: 'Explore quantum computing, edge computing, and the next generation of technological innovations.',
        genre: ['Documentary', 'Future Tech', 'Innovation'],
        year: 2024,
        rating: 'PG',
        duration: '50m',
        thumbnail: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1920',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 22134
      }
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Liked',
    movies: [] // This will be populated dynamically
  }
];

export const getMostLikedMovies = (allMovies: Movie[], count: number = 12): Movie[] => {
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, count);
};