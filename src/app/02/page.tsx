import { COVER_IMAGE_LIST } from "@/app/02/contents/cover-image-list";
import { PAGE_URL } from "@/constants/url";
import CoverImageList from "@/components/CoverImageList";

export default function Home() {
  return (
    <main className="flex md:min-h-screen w-screen flex-col items-center">
      <CoverImageList
        colNum={2}
        coverImageList={COVER_IMAGE_LIST}
        detailLink={PAGE_URL.THIRD.DETAIL}
      />
    </main>
  );
}
