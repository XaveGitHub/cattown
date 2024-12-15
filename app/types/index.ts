// Create a new file for shared types
export interface TokenStatsProps {
  label: string;
  value: string;
}

export interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
} 