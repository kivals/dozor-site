import Image from "next/image";
import type { ComponentType } from "react";
import {
  BarrierIcon,
  CameraIcon,
  PedestrianIcon,
  GuardIcon,
  BellIcon,
  DocumentIcon,
  LogoIcon,
} from "./control-icons";

type IconProps = { className?: string };

// Positions are percentages relative to the 953×612 photo, matching the
// Figma layout. Order mirrors control.items so activeIndex maps 1:1.
const nodes: { Icon: ComponentType<IconProps>; x: number; y: number }[] = [
  { Icon: BarrierIcon, x: 41.55, y: 83.66 }, // Контроль доступа
  { Icon: CameraIcon, x: 67.26, y: 13.56 }, // Видеонаблюдение
  { Icon: PedestrianIcon, x: 26.44, y: 43.14 }, // Патрулирование
  { Icon: GuardIcon, x: 83.95, y: 40.52 }, // Инспектирование
  { Icon: BellIcon, x: 34.31, y: 17.16 }, // Оперативное реагирование
  { Icon: DocumentIcon, x: 74.92, y: 72.22 }, // Отчётность
];

const center = { x: 57.08, y: 50 };

// Circle diameters as % of photo width.
const nodeSize = 7.7;
const centerSize = 13.4;

export function ControlVisual({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] lg:rounded-[40px]">
      <Image
        src="/control/photo.png"
        alt="Территория объекта под охраной"
        width={953}
        height={612}
        priority
        className="h-auto w-full"
      />

      {/* Fade into the surface container on the left edge (desktop only) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-surface to-transparent lg:block" />

      {/* Connector lines from the center to each node */}
      <svg
        viewBox="0 0 953 612"
        className="pointer-events-none absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden
      >
        {nodes.map((node) => {
          const x2 = (node.x / 100) * 953;
          const y2 = (node.y / 100) * 612;
          const cx = (center.x / 100) * 953;
          const cy = (center.y / 100) * 612;
          return (
            <g key={`line-${node.x}-${node.y}`}>
              <line
                x1={cx}
                y1={cy}
                x2={x2}
                y2={y2}
                stroke="#ffffff"
                strokeWidth={1}
                strokeOpacity={0.6}
              />
              <circle
                cx={cx + (x2 - cx) * 0.5}
                cy={cy + (y2 - cy) * 0.5}
                r={3}
                fill="#397bdd"
              />
              <circle
                cx={cx + (x2 - cx) * 0.5}
                cy={cy + (y2 - cy) * 0.5}
                r={1.4}
                fill="#ffffff"
              />
            </g>
          );
        })}
      </svg>

      {/* Center logo */}
      <div
        className="absolute flex aspect-square -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-accent shadow-[0_10px_30px_rgba(12,37,60,0.2)] ring-8 ring-white/30"
        style={{ left: `${center.x}%`, top: `${center.y}%`, width: `${centerSize}%` }}
      >
        <LogoIcon className="h-[44%] w-auto" />
      </div>

      {/* Interactive nodes */}
      {nodes.map((node, index) => {
        const active = index === activeIndex;
        const Icon = node.Icon;
        return (
          <button
            key={`node-${node.x}-${node.y}`}
            type="button"
            onClick={() => onSelect(index)}
            className={`absolute flex aspect-square -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border ring-[6px] ring-white/25 transition-colors hover:brightness-105 ${
              active
                ? "border-white/80 bg-accent text-white"
                : "border-accent/40 bg-white text-accent"
            }`}
            style={{ left: `${node.x}%`, top: `${node.y}%`, width: `${nodeSize}%` }}
            aria-label={`Показать карточку ${index + 1}`}
            aria-pressed={active}
          >
            <Icon className="h-1/2 w-auto" />
          </button>
        );
      })}
    </div>
  );
}
