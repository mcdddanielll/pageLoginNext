// components/Button.jsx
'use client';

type ButtonProps = {
  teks: string;
  teksLoading?: string;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  saatDiklik?: () => void;
};

export default function Button({
  teks,
  teksLoading = 'Memproses...',
  loading = false,
  type = 'button',
  saatDiklik,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={loading}
      onClick={saatDiklik}
      className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-college disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? teksLoading : teks}
    </button>
  );
}