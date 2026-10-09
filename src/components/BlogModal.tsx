import React, { useState } from 'react';
import { X, BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(BLOG_POSTS[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#faf8f5] rounded-3xl shadow-2xl border border-[#ded8cc] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#e9e3d7] flex items-center justify-between bg-[#f4f0e6]">
          <div>
            <h3 className="font-serif-display text-2xl font-light text-[#1f2d22]">
              Blog & Artigos Integrativos
            </h3>
            <p className="text-xs text-[#637265]">
              Ciência e nutrição traduzidas para a sua rotina diária
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="p-1.5 rounded-full hover:bg-[#e6e0d2] text-[#4f5f52] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Post Selection Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 border-b border-[#ece6da]">
            {BLOG_POSTS.map((post) => (
              <button
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedPost?.id === post.id
                    ? 'bg-[#cde4d3] text-[#1c2e22] font-semibold'
                    : 'bg-white border border-[#ded7c8] text-[#556358] hover:bg-[#f2ece1]'
                }`}
              >
                {post.category}
              </button>
            ))}
          </div>

          {/* Active Post Content */}
          {selectedPost && (
            <article className="space-y-5">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#597861]">
                  {selectedPost.category}
                </span>
                <h2 className="font-serif-display text-2xl sm:text-3xl font-light text-[#1c2a20] mt-1 leading-snug">
                  {selectedPost.title}
                </h2>
                <div className="flex items-center gap-3 text-xs text-[#718074] mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} /> {selectedPost.date}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> {selectedPost.readTime}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-[#f3efe6] rounded-2xl border-l-2 border-[#82a68a] text-sm text-[#465449] italic">
                “{selectedPost.excerpt}”
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#465449] leading-relaxed">
                {selectedPost.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-[#ebe4d7] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#f5f1e8] p-5 rounded-2xl">
                <div>
                  <h4 className="font-serif-display text-lg font-medium text-[#1e2e22]">
                    Deseja um protocolo específico para suas necessidades?
                  </h4>
                  <p className="text-xs text-[#637265]">
                    Agende sua conversa inicial de 20 minutos com a Dra. Camila Duarte.
                  </p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1c2e22] bg-[#cde4d3] hover:bg-[#b8dcc1] rounded-full transition-all shrink-0 cursor-pointer"
                >
                  Agendar Agora
                </button>
              </div>
            </article>
          )}
        </div>
      </div>
    </div>
  );
};
