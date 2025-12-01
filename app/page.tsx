import SkillList from '../features/common/components/skillList';
import { DisplayMv } from "features/routes/top/components/displayMv";
import { DisplayAbout } from "features/routes/top/components/displayAbout";
import { DisplayBlog } from "features/routes/top/components/displayBlog";
import { DisplayWork } from 'features/routes/top/components/displayWork';

export default function Page() {

  return (
    <>
      <DisplayMv />
      <DisplayAbout />
      <DisplayBlog />
      <DisplayWork />
      <section className='py-14 flex flex-col items-center gap-14'>
        <SkillList />
      </section>
    </>
  )
}
