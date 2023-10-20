import * as React from "react";
import { useMemo, useRef, useState } from "react";
import { Masonry } from "@mui/lab";
import { ImageListItem, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { graphql, HeadFC, PageProps, useStaticQuery } from "gatsby";
import Lightbox from "yet-another-react-lightbox";
import { Callback } from "yet-another-react-lightbox/dist/types";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import ImageCard from "~/components/ImageCard";
import Section from "~/components/Section";
import SEO from "~/components/SEO";
import Waves from "~/components/Waves";

type CaptionsRef = {
    visible: boolean;
    show: Callback;
    hide: Callback;
};
type ThumbnailRef = {
    visible: boolean;
    show: Callback;
    hide: Callback;
};
type ZoomRef = {
    zoom: number;
    maxZoom: number;
    offsetX: number;
    offsetY: number;
    disabled: boolean;
    zoomIn: Callback;
    zoomOut: Callback;
};

const Gallery: React.FC<PageProps> = () => {
    const theme = useTheme();

    const captionsRef = useRef<CaptionsRef>(null);
    const thumbnailsRef = useRef<ThumbnailRef>(null);
    const zoomRef = useRef<ZoomRef>(null);

    const data: Queries.GalleryImagesQuery = useStaticQuery(graphql`
      query GalleryImages {
        allSanityGalleryImage {
         edges {
          node {
           _id, 
           year,
           author,
           img {
             asset {
               gatsbyImageData(placeholder: BLURRED)
             }
           }
          }
         }
      }
    }
    `);

    const galleryData = data.allSanityGalleryImage.edges.map(edge => edge.node);

    const [index, setIndex] = useState(-1);

    const yearFilters = [
        ...new Set(galleryData.map(item => item.year?.toString()))
    ].sort((a, b) => Number(a) - Number(b));

    const [yearFilter, setYearFilter] = useState(yearFilters[yearFilters.length - 1]?.toString());
    const handleYearFilter = (event: MouseEvent<HTMLElement>, newYearFilter: string) => setYearFilter(newYearFilter);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore -- Typescript can't seem to infer that I've filtered out the undefined values
    const filteredSlides: {
        src: string,
        description: string | null,
        year: number
    }[] = useMemo(
        () => galleryData
            .map(item => ({
                src: item.img?.asset?.gatsbyImageData.images.fallback?.src,
                description: item.author ? `Photo by ${item.author}` : null,
                year: item.year
            }))
            .filter(item => item.src)
            .filter(item => item.year?.toString() === yearFilter),
        [yearFilter]
    );

    const filteredGalleryData = useMemo(
        () => galleryData
            .map(item => item)
            .filter(item => item.year?.toString() === yearFilter),
        [yearFilter]
    );

    return (
        <>
            <main>
                <Waves bottomColor={theme.palette.secondary.main} topColor={theme.palette.primary.main} />
                <Section bgColor={theme.palette.secondary}>
                    <Heading color={theme.palette.secondary} subtitle="It’s everything it looks" title="Gallery" />

                    <Stack alignItems="center" spacing={1}>

                        <Typography variant="body1">
                            Do you have photos we can feature in our gallery? Direct message them to us on Facebook or
                            post
                            them in our Facebook group and your photos could be featured right here!
                        </Typography>

                        <div>
                            <ToggleButtonGroup
                                aria-label="year"
                                exclusive
                                onChange={handleYearFilter}
                                size="small"
                                value={yearFilter}
                            >
                                {
                                    yearFilters.map(value => (
                                        value?.toString()
                                            ? (
                                                <ToggleButton
                                                    key={value}
                                                    aria-label={value?.toString()}
                                                    color="red"
                                                    sx={{ border: "none", textTransform: "uppercase" }}
                                                    value={value}
                                                >
                                                    {value?.toString()}
                                                </ToggleButton>
                                            )
                                            : null
                                    ))
                                }
                            </ToggleButtonGroup>
                        </div>

                        <Masonry columns={4} spacing={2}>
                            {
                                filteredGalleryData.map((image, imageIndex) => (
                                    image.img?.asset?.gatsbyImageData
                                        ? (
                                            <ImageListItem key={image._id}>
                                                <ImageCard
                                                    img={image.img?.asset.gatsbyImageData}
                                                    onClick={() => setIndex(imageIndex)}
                                                />
                                            </ImageListItem>
                                        )
                                        : null
                                ))
                            }
                        </Masonry>

                    </Stack>

                </Section>
                <Waves bottomColor={theme.palette.dark.main} topColor={theme.palette.secondary.main} variant={2} />
                <Footer />
            </main>

            <Lightbox
                captions={{ ref: captionsRef }}
                close={() => setIndex(-1)}
                index={index}
                on={{
                    click: () => {
                        (
                            captionsRef.current?.visible
                                ? captionsRef.current?.hide
                                : captionsRef.current?.show
                        )?.();
                        (
                            thumbnailsRef.current?.visible
                                ? thumbnailsRef.current?.hide
                                : thumbnailsRef.current?.show
                        )?.();
                    }
                }}
                open={index >= 0}
                plugins={[Captions, Thumbnails, Zoom]}
                slides={filteredSlides}
                styles={{
                    root: {
                        "--yarl__slide_captions_container_background": "rgba(0, 0, 0, .5)",
                        "--yarl__color_backdrop": "rgba(0, 0, 0, .9)",
                        "--yarl__thumbnails_thumbnail_height": "40px",
                        "--yarl__thumbnails_thumbnail_width": "60px",
                        "--yarl__thumbnails_thumbnail_active_border_color": theme.palette.yellow.main
                    }
                }}
                thumbnails={{ ref: thumbnailsRef }}
                zoom={{ ref: zoomRef }}
            />
            <button onClick={() => zoomRef.current?.zoomIn()} type="button">Zoom In</button>
            <button onClick={() => zoomRef.current?.zoomOut()} type="button">Zoom Out</button>
        </>
    );
};

export default Gallery;

const pageTitle = "Gallery - Matlock Raft Event";
const pageDescription = "Browse through the memorable moments captured at our past " +
    "events. See the excitement, fun, and joy from the event";
const pageUrl = "/gallery";
export const Head: HeadFC = () => <SEO description={pageDescription} pathname={pageUrl} title={pageTitle} />;
