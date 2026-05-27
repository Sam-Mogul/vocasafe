"use client";

interface ShareButtonsProps {
  shareUrl: string;
}

export default function ShareButtons({ shareUrl }: ShareButtonsProps) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Facebook Share */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-full hover:bg-neutral-light transition-all flex items-center justify-center text-gray-700 hover:text-[#1877F2] cursor-pointer"
        title="Share on Facebook"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M9 8H7v3h2v9h3v-9h3.6L16 8h-4V6c0-.5.5-1 1-1h3V2h-3c-3 0-5 2-5 5v1z" />
        </svg>
      </a>

      {/* X Share */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-full hover:bg-neutral-light transition-all flex items-center justify-center text-gray-700 hover:text-black cursor-pointer"
        title="Share on X"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* WhatsApp Share */}
      <a
        href={`https://api.whatsapp.com/send/?text=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-full hover:bg-neutral-light transition-all flex items-center justify-center text-gray-700 hover:text-[#25D366] cursor-pointer"
        title="Share on WhatsApp"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.375 3.469 2.235 2.235 3.465 5.212 3.465 8.381 0 6.536-5.325 11.86-11.859 11.86-2.007-.001-3.98-.513-5.736-1.489L0 24zm6.59-4.846c1.66.988 3.284 1.488 4.962 1.49 5.333 0 9.67-4.332 9.67-9.664 0-2.584-1.004-5.012-2.827-6.837A9.617 9.617 0 0 0 11.86 1.34c-5.338 0-9.673 4.333-9.673 9.667 0 1.761.472 3.48 1.365 5.013l-.973 3.55 3.633-.952zm10.748-6.195c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.669.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
      </a>

      {/* LinkedIn Share */}
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-full hover:bg-neutral-light transition-all flex items-center justify-center text-gray-700 hover:text-[#0A66C2] cursor-pointer"
        title="Share on LinkedIn"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>

      {/* Pinterest Share */}
      <a
        href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-full hover:bg-neutral-light transition-all flex items-center justify-center text-gray-700 hover:text-[#E60023] cursor-pointer"
        title="Share on Pinterest"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.017 0c-6.627 0-12 5.373-12 12 0 5.077 3.146 9.426 7.613 11.217-.102-.947-.195-2.408.04-3.443.213-.932 1.377-5.83 1.377-5.83s-.351-.703-.351-1.743c0-1.633.947-2.853 2.126-2.853.999 0 1.482.75 1.482 1.65 0 1.004-.639 2.508-.969 3.899-.276 1.165.584 2.114 1.732 2.114 2.079 0 3.677-2.193 3.677-5.361 0-2.803-2.015-4.764-4.891-4.764-3.33 0-5.286 2.498-5.286 5.08 0 1.005.387 2.083.871 2.67.095.116.109.217.08.334-.088.367-.284 1.157-.323 1.312-.05.212-.172.257-.397.153-1.484-.691-2.409-2.862-2.409-4.606 0-3.753 2.727-7.202 7.863-7.202 4.127 0 7.335 2.94 7.335 6.873 0 4.103-2.588 7.404-6.177 7.404-1.205 0-2.337-.626-2.726-1.369l-.744 2.829c-.269 1.025-.998 2.309-1.486 3.107 1.127.349 2.321.537 3.559.537 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>

      {/* Link Copy Share */}
      <button
        onClick={() => {
          navigator.clipboard.writeText(shareUrl);
          alert("Campaign link copied to clipboard!");
        }}
        className="p-2.5 rounded-full hover:bg-neutral-light transition-all flex items-center justify-center text-gray-700 hover:text-accent-orange cursor-pointer"
        title="Copy Campaign Link"
      >
        <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      </button>
    </div>
  );
}
