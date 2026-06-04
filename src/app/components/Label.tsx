export function Label({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] ${
        dark ? "bg-white/5 text-[#bcae9e]" : "text-[#8b6d58]"
      }`}
    >
      <span className="h-3 w-3 rounded-full border-2 border-[#d86120]" />
      {children}
    </div>
  );
}
