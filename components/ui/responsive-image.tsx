import Image from 'next/image';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ResponsiveImage({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  sizes = '100vw'
}: ResponsiveImageProps) {
  // Default placeholder blur data URL
  const blurDataUrl = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAAAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLyovLi0/PURBTD9NQDQ4RWFETVNzdmhzeG5ARUeVk193in//2wBDAQoLCw4NDhwQEBt3JR8lN3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3f/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={blurDataUrl}
      />
    </div>
  );
}

interface BackgroundImageProps extends ResponsiveImageProps {
  children?: React.ReactNode;
}

export function BackgroundImage({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  sizes = '100vw',
  children 
}: BackgroundImageProps) {
  return (
    <div className={`relative ${className}`}>
      <ResponsiveImage
        src={src}
        alt={alt}
        className="absolute inset-0 -z-10"
        priority={priority}
        sizes={sizes}
      />
      {children}
    </div>
  );
}

export function ImageGrid({ images }: { images: ResponsiveImageProps[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, i) => (
        <ResponsiveImage
          key={i}
          {...image}
          className="aspect-video rounded-lg overflow-hidden"
        />
      ))}
    </div>
  );
}
