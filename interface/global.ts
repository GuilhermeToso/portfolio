import {Property} from "csstype";
import Content = Property.Content;

export interface LangBaseInterface {
    en: string;
    pt: string;
}

export interface HeaderInterface {
    sections: LangBaseInterface[];
}

export interface HomeInterface {
    jobTitle: LangBaseInterface;
    description: LangBaseInterface;
    cvButton: LangBaseInterface;
    callButton: LangBaseInterface;
}

export interface ServiceContentInterface {
    title: LangBaseInterface;
    content: LangBaseInterface;
}

export interface ServicesInterface {
    title: LangBaseInterface;
    list: ServiceContentInterface[];
}

export interface ContentInterface {
    title: LangBaseInterface;
    list: string[];

}

export interface DomainsInterface {
    title: LangBaseInterface;
    content: ContentInterface[];
}

export interface SkillsInterface {
    title: LangBaseInterface;
    subTitle: LangBaseInterface;
    domains: DomainsInterface[];
}

export interface AboutInterface {
    title: LangBaseInterface;
    description: LangBaseInterface;
    hobbies: LangBaseInterface[];
}

export interface TimelineInterface {
    title: LangBaseInterface;
    list: {
        time: LangBaseInterface;
        title: LangBaseInterface;
        link?: string;
        description: LangBaseInterface;
    }[];
}

export interface ContactInterface {
    leftSide: LangBaseInterface[];
    rightSide: {
        title: LangBaseInterface;
        text: LangBaseInterface;
        button: LangBaseInterface;
    }
}

export interface BlogInterface {
    title: LangBaseInterface;
    button: LangBaseInterface;
}

export interface DataInterface {
    header: HeaderInterface;
    home: HomeInterface;
    about: AboutInterface;
    services: ServicesInterface;
    projects: ProjectsInterface;
    skills: SkillsInterface;
    timeline: TimelineInterface;
    contact: ContactInterface;
    blog: BlogInterface;
}

export type sectionProps = {
    sectionData: DataInterface;
    language: 'en' | 'pt';
}


export interface Project {
    id: number;
    title?: LangBaseInterface;
    shortDescription?: LangBaseInterface;
    image?: string;
    description?: LangBaseInterface;
    jobTitle?: LangBaseInterface;
    contractType?: LangBaseInterface;
    company?: LangBaseInterface;
    duration?: LangBaseInterface;
    status?: LangBaseInterface;
    link?: string;
    techStack?: {
        language?: string[];
        environment?: string[];
        model?: string[];
        backend?: string[];
        database?: string[];
        frontend?: string[];
        infrastructure?: string[];
        recommendation?: string[];
        tools?: string[];
        services?: string[];
        iot?: string[];
        search?: string[];
    }
}

export interface ListOfProjects {
    domain: LangBaseInterface;
    content: Project[];
}

export interface ProjectsInterface {
    title: LangBaseInterface;
    list: ListOfProjects[];

}