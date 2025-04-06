
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight, PlayCircle, X } from 'lucide-react';
import { useState } from 'react';
import LazyImage from '@/components/common/LazyImage';

const StackedVideoCard = ({ items = [], title = "Videos" }) => {
    const [activeVideo, setActiveVideo] = useState(null);

    const getYoutubeId = (url) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const handleVideoClick = (video) => {
        setActiveVideo(video);
    };

    const closeVideoModal = () => {
        setActiveVideo(null);
    };

    if (!items || items.length === 0) {
        return null;
    }

    return (
        <div className="relative">
            {title && (
                <h3 className="text-xl font-semibold mb-4 text-pppi-darkblue">{title}</h3>
            )}
            <div className="relative group pb-10">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    breakpoints={{
                        480: { slidesPerView: 1.5 },
                        640: { slidesPerView: 2.2 },
                        768: { slidesPerView: 2.5 },
                        1024: { slidesPerView: 3.2, spaceBetween: 24 },
                        1280: { slidesPerView: 3.5, spaceBetween: 30 },
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    navigation={{ nextEl: '.swiper-button-next-video', prevEl: '.swiper-button-prev-video' }}
                    className="!pb-24 mx-10 sm:mx-12"
                >
                    {items.map((video, index) => {
                        const videoId = getYoutubeId(video.videoUrl) || video.id;
                        return (
                            <SwiperSlide key={index} className="flex flex-col items-center h-auto">
                                <div 
                                    className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md group/card transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                                    onClick={() => handleVideoClick(video)}
                                >
                                    <LazyImage
                                        src={video.thumbnail || (videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : '/placeholder.svg')}
                                        alt={video.title}
                                        className="w-full h-full"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-80 group-hover/card:bg-opacity-0 flex items-center justify-center transition-all duration-300">
                                        <PlayCircle size={95} className="text-white opacity-50 group-hover/card:opacity-100 group-hover/card:scale-110 transition-all duration-300" />
                                    </div>
                                </div>
                                <div className="w-full mt-3 space-y-1 mb-16">
                                    <h3 className="text-sm md:text-base font-medium text-gray-800 line-clamp-1 mt-2">{video.title}</h3>
                                    {video.description && <p className="text-xs md:text-sm text-gray-500 line-clamp-2">{video.description.substring(0, 80)}</p>}
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <div className="absolute top-1/3 -translate-y-1/2 left-0 transform z-10">
                    <button className="swiper-button-prev-video p-2 bg-white text-pppi-blue rounded-full shadow-md opacity-70 hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100">
                        <ChevronLeft size={24} />
                    </button>
                </div>
                <div className="absolute top-1/3 -translate-y-1/2 right-0 transform z-10">
                    <button className="swiper-button-next-video p-2 bg-white text-pppi-blue rounded-full shadow-md opacity-70 hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
            {activeVideo && (
                <>
                    <div className="fixed inset-0 z-40 bg-black bg-opacity-90" onClick={closeVideoModal}></div>
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeVideoModal}>
                        <div className="relative w-full max-w-4xl max-h-[90vh] aspect-video" onClick={(e) => e.stopPropagation()}>
                            <iframe
                                src={`https://www.youtube.com/embed/${getYoutubeId(activeVideo.videoUrl) || activeVideo.id}?autoplay=1`}
                                title={activeVideo.title}
                                className="w-full h-full rounded-lg"
                                allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                            <button 
                                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-20"
                                onClick={closeVideoModal}
                            >
                                <X size={32} />
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default StackedVideoCard;
