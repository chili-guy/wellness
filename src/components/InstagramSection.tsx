import React, { useState } from 'react';
import { Heart, MessageCircle, Instagram, Play } from 'lucide-react';
import { InstagramPost } from '../types';

interface InstagramSectionProps {
  posts: InstagramPost[];
  onSelectPost: (post: InstagramPost) => void;
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({
  posts,
  onSelectPost,
}) => {
  return (
    <section className="py-20 md:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[2.6rem] font-light text-[#1e2a21]">
            Venha Me Acompanhar no Instagram!
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5c7362] hover:text-[#253d2c] transition-colors"
          >
            <Instagram size={16} />
            @dracamiladuarte.nutri
          </a>
        </div>

        {/* 5-Card Square Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {posts.map((post, idx) => (
            <div
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all bg-[#ebe6db] border border-[#e2dcd0]"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient scrim for readable text matching reference */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-between p-3.5 transition-opacity">
                
                {/* Reel icon on top right if video */}
                <div className="flex justify-end">
                  {idx % 2 === 1 && (
                    <div className="w-6 h-6 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white">
                      <Play size={11} fill="white" />
                    </div>
                  )}
                </div>

                {/* Bottom title text matching reference typography */}
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#d5e7d9] drop-shadow-xs block mb-0.5">
                    {post.category}
                  </span>
                  <h3 className="text-xs sm:text-sm font-semibold text-white drop-shadow-md line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                </div>
              </div>

              {/* Hover overlay with social stats */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-4 text-white text-xs font-semibold">
                <span className="flex items-center gap-1">
                  <Heart size={14} fill="currentColor" /> {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle size={14} fill="currentColor" /> {post.comments}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
