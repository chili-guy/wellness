import React from 'react';
import { X, Heart, MessageCircle, Instagram, ExternalLink } from 'lucide-react';
import { InstagramPost } from '../types';

interface InstagramPreviewModalProps {
  post: InstagramPost | null;
  onClose: () => void;
}

export const InstagramPreviewModal: React.FC<InstagramPreviewModalProps> = ({
  post,
  onClose,
}) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#faf8f5] rounded-3xl shadow-2xl border border-[#ded8cc] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-[#e9e3d7] flex items-center justify-between bg-[#f4f0e6]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#c9e0cf] flex items-center justify-center font-script-signature text-lg text-[#1e3424]">
              CD
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1e2a21]">dracamiladuarte.nutri</p>
              <p className="text-[10px] text-[#6b7b6e]">{post.category}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="p-1.5 rounded-full hover:bg-[#e6e0d2] text-[#4f5f52] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4">
          <div className="aspect-square w-full rounded-2xl overflow-hidden bg-[#ded7c8] border border-[#e1dad0]">
            <img
              src={post.imageUrl}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-[#526355]">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 font-semibold text-[#1f2d22]">
                  <Heart size={16} className="text-[#a43b3b] fill-[#a43b3b]" />
                  {post.likes} curtidas
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle size={15} />
                  {post.comments} comentários
                </span>
              </div>
            </div>

            <h4 className="font-serif-display text-xl font-normal text-[#1e2a21]">
              {post.title}
            </h4>

            <p className="text-xs sm:text-sm text-[#4a584d] leading-relaxed">
              {post.summary}
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1c2e22] bg-[#cde4d3] hover:bg-[#b8dcc1] rounded-full transition-all"
            >
              <Instagram size={14} />
              Ver Publicação no Instagram
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
