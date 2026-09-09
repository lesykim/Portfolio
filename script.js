/*
      실제 배포 전에 아래 3개 값만 바꾸면 됩니다.
      예:
      github: "https://github.com/your-id"
      email: "hello@example.com"
      resumeUrl: "./resume-ko.pdf"
    */
    const SETTINGS = {
      github: "https://github.com/lesykim",
      email: "",
      resumeUrl: ""
    };

    const translations = {
      ko: {
        brand: "김서영",
        name: "김서영",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navExperience: "Experience",
        navContact: "Contact",
        resume: "Resume",
        heroLine1: "문제를 꼼꼼히 찾고,",
        heroLine2: "끝까지 해결합니다.",
        heroCopy: "Java와 Kotlin 기반의 개발 경험, QA 업무에서 쌓은 문제 확인 능력, 프로젝트 리더 경험을 바탕으로 안정적인 서비스를 만드는 백엔드 개발자로 성장하고 있습니다.",
        viewProjects: "프로젝트 보기",
        viewResume: "이력서 보기",
        featuredTitle: "AI 아동 교육용<br />동화 제작 애플리케이션",
        award: "🏆 금상 · 장관상 수상",
        metricDev: "애플리케이션 개발",
        metricLead: "일정 · 역할 관리",
        aboutHeading: "어떤 개발자인가요?",
        aboutIntro: "개발 경험뿐 아니라 QA와 조직 업무 경험을 통해 정확성, 책임감, 협업의 기본을 익혔습니다.",
        educationLabel: "학력",
        educationValue: "배화여자대학교 컴퓨터공학과",
        gradeLabel: "학점",
        languageLabel: "어학",
        aboutCardTitle: "작은 문제를 놓치지 않는 개발자",
        aboutP1: "Java와 Kotlin을 학습하고 실제 Kotlin 기반 애플리케이션 제작 프로젝트를 수행하며 개발 경험을 쌓았습니다.",
        aboutP2: "QA 업무에서는 기능과 오류를 반복적으로 확인하며 정확하고 꼼꼼하게 문제를 발견하는 습관을 길렀습니다.",
        aboutP3: "2023 이브와 멘토링 프로젝트에서는 팀장으로 일정과 역할을 조율하며 결과물을 완성했고, 금상인 장관상 수상으로 이어졌습니다.",
        resumeDetail: "Resume 자세히 보기 →",
        strengthHeading: "제가 가진 강점입니다.",
        strength1Title: "꼼꼼함",
        strength1Text: "QA 경험을 통해 오류와 이상을 반복적으로 확인하는 업무 습관을 익혔습니다.",
        strength2Title: "책임감",
        strength2Text: "맡은 업무와 프로젝트를 끝까지 수행하고 결과를 만들어내는 태도를 중요하게 생각합니다.",
        strength3Title: "협업",
        strength3Text: "팀원과 역할을 조율하고 공동의 목표를 수행하는 경험을 쌓았습니다.",
        strength4Title: "리더십",
        strength4Text: "프로젝트 팀장으로 일정 관리와 역할 분담을 맡아 팀을 이끌었습니다.",
        skillsHeading: "사용할 수 있는 기술",
        skillsIntro: "현재 보유 기술을 과장하지 않고, 실제 경험 수준을 중심으로 정리했습니다.",
        javaText: "기본 문법 및 프로그래밍 활용",
        kotlinText: "Kotlin을 활용한 애플리케이션 개발 경험",
        htmlText: "웹 페이지 구조 작성 가능",
        learningTitle: "Learning",
        learningText: "백엔드 기술 역량을 지속적으로 확장 중",
        projectHeading: "직접 기획하고 개발한 프로젝트",
        projectIntro: "현재 이력서에서 가장 대표성이 높은 프로젝트를 중심으로 구성했습니다.",
        mockTitle: "아이와 함께 만드는<br />오늘의 동화",
        mockText: "아이의 상상력을 바탕으로 새로운 이야기를 만들어보세요.",
        projectTitle: "AI 아동 교육용<br />동화 제작 애플리케이션",
        projectTitlePlain: "AI 아동 교육용 동화 제작 애플리케이션",
        projectSummary: "AI를 활용한 아동 교육용 동화 제작 앱을 기획·제작했습니다. 팀장으로 일정과 역할을 관리했고 Kotlin으로 앱 개발에 참여했습니다.",
        projectRole: "Team Leader / Developer",
        projectResult: "금상 · 장관상",
        projectFocus: "기획 · 개발 · 협업",
        projectDetail: "프로젝트 자세히 보기 →",
        videoButton: "완성 영상 보기 ↓",
        videoHeading: "WonderTales 프로젝트 완성 영상",
        videoText: "프로젝트의 실제 완성 결과물을 영상으로 확인할 수 있습니다.",
        experienceHeading: "실무 경험에서 배운 기본",
        experienceIntro: "개발 외 업무에서도 정확성, 반복 검수, 조직 내 커뮤니케이션을 경험했습니다.",
        qaPeriod: "3개월",
        qaTitle: "QA 업무 아르바이트",
        qaSummary: "서비스 및 기능 테스트, 오류 및 이상 사항 확인",
        qa1: "서비스 및 기능 테스트 업무 수행",
        qa2: "오류 및 이상 사항 확인",
        qa3: "반복 검수 과정에서 정확성과 꼼꼼함을 기반으로 업무 수행",
        dwPeriod: "6개월",
        dwTitle: "대웅제약 · 사무보조",
        dwSummary: "문서·자료 정리와 정확한 데이터 관리 지원",
        dw1: "문서 및 자료 정리 등 사무 지원 업무",
        dw2: "정확한 데이터 및 문서 관리를 통한 업무 지원",
        dw3: "조직 내 요청사항을 파악하고 지원 업무 수행",
        whyHeading: "개발 경험에 QA의 꼼꼼함과 리더 경험을 더했습니다.",
        whyDev: "Java와 Kotlin 학습 및 실제 Kotlin 애플리케이션 제작 경험",
        whyQa: "기능과 오류를 반복적으로 확인하며 익힌 문제 확인 능력",
        whyLead: "팀장으로 일정과 역할을 조율하고 프로젝트 완성까지 이끈 경험",
        whyResult: "→ 안정적인 서비스와 효율적인 시스템을 구현할 수 있는 백엔드 개발자로 성장하고자 합니다.",
        resumeCtaTitle: "조금 더 자세한 이력이 궁금하신가요?",
        resumeCtaText: "학력 · 프로젝트 · 업무 경험 · 기술 · 자격 정보를 한 화면에서 확인할 수 있습니다.",
        resumeDetail2: "이력서 자세히 보기",
        pdfDownload: "PDF 다운로드 ↓",
        contactText: "함께 일할 기회를 기다립니다. 연락처와 GitHub 주소는 실제 배포 전에 설정값에 입력해주세요.",
        emailBtn: "이메일 보내기",
        backHome: "← Portfolio로 돌아가기",
        projectDetailIntro: "2023 이브와 멘토링에서 팀장으로 참여하여 서비스 아이디어를 구체화하고, Kotlin 기반 앱 개발과 프로젝트 진행 관리를 수행했습니다.",
        overviewTitle: "프로젝트 개요",
        overviewText: "AI를 활용한 아동 교육용 동화 제작 애플리케이션을 기획하고 제작한 프로젝트입니다.",
        roleTitle: "담당 역할",
        role1: "프로젝트 팀장으로 일정 관리 및 팀원 역할 분담",
        role2: "서비스 아이디어 구체화 및 프로젝트 진행 과정 관리",
        role3: "Kotlin을 활용한 애플리케이션 개발",
        processTitle: "진행 과정",
        process1: "아이디어 구체화",
        process2: "역할 분담",
        process3: "Kotlin 개발",
        process4: "프로젝트 완성 및 수상",
        problemTitle: "기술 문제와 해결 과정",
        problemNote: "현재 이력서에는 구체적인 기술 문제와 해결 과정이 기록되어 있지 않습니다. 실제 프로젝트 회고 내용을 추가하면 이 영역을 채용 관점에서 가장 강한 섹션으로 확장할 수 있습니다.",
        resultTitle: "프로젝트 결과",
        resultText: "프로젝트의 완성도와 성과를 인정받아 금상인 장관상을 수상했습니다.",
        learnedTitle: "프로젝트에서 얻은 것",
        learned1: "실제 애플리케이션 제작 경험",
        learned2: "팀원 역할 조율과 일정 관리 경험",
        learned3: "팀장으로 결과물 완성까지 이끈 책임감",
        resumeLead: "Java와 Kotlin 기반의 개발 경험, 프로젝트 리더 경험과 QA·사무보조 업무를 통해 꼼꼼한 문제 확인 능력과 협업 역량을 갖춘 신입 개발자입니다.",
        educationStatus: "4학년 졸업 · 학점 3.9",
        projectResumeMeta: "2023 이브와 멘토링 · 팀장 · 금상(장관상)",
        careerGoal: "Java와 Kotlin 기반의 개발 경험을 바탕으로 백엔드 기술 역량을 지속적으로 확장하고, 안정적인 서비스와 효율적인 시스템을 구현할 수 있는 백엔드 개발자로 성장하고자 합니다."
      },

      en: {
        brand: "Seoyeong Kim",
        name: "Seoyeong Kim",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navExperience: "Experience",
        navContact: "Contact",
        resume: "Resume",
        heroLine1: "I catch the details,",
        heroLine2: "and see problems through.",
        heroCopy: "I am an entry-level backend developer growing through Java and Kotlin development experience, QA work that sharpened my attention to issues, and project leadership experience.",
        viewProjects: "View Projects",
        viewResume: "View Resume",
        featuredTitle: "AI-Powered Educational<br />Story App for Children",
        award: "🏆 Gold Award · Ministerial Award",
        metricDev: "Application Development",
        metricLead: "Schedule · Role Management",
        aboutHeading: "What kind of developer am I?",
        aboutIntro: "Beyond development, my QA and office support experience helped me build accuracy, responsibility, and collaboration skills.",
        educationLabel: "Education",
        educationValue: "Baewha Women's University · Computer Engineering",
        gradeLabel: "GPA",
        languageLabel: "Language",
        aboutCardTitle: "A developer who pays attention to small issues",
        aboutP1: "I studied Java and Kotlin and gained hands-on development experience by building a Kotlin-based application.",
        aboutP2: "Through QA work, I developed a habit of repeatedly checking functions and defects with accuracy and care.",
        aboutP3: "As team leader in the 2023 Evewa Mentoring project, I coordinated schedules and roles, completed the project, and received a Gold Award recognized as a ministerial award.",
        resumeDetail: "View Resume →",
        strengthHeading: "My core strengths",
        strength1Title: "Attention to Detail",
        strength1Text: "QA experience trained me to repeatedly check defects and abnormalities with care.",
        strength2Title: "Responsibility",
        strength2Text: "I value carrying assigned work and projects through to a tangible result.",
        strength3Title: "Collaboration",
        strength3Text: "I have experience coordinating roles with teammates and working toward shared goals.",
        strength4Title: "Leadership",
        strength4Text: "As a project team leader, I managed schedules and divided responsibilities.",
        skillsHeading: "Technical Skills",
        skillsIntro: "The skill levels below reflect only what is supported by my actual experience.",
        javaText: "Basic syntax and programming use",
        kotlinText: "Application development experience using Kotlin",
        htmlText: "Able to structure web pages",
        learningTitle: "Learning",
        learningText: "Continuously expanding backend development skills",
        projectHeading: "A project I planned and built",
        projectIntro: "This section highlights the most representative project in my current resume.",
        mockTitle: "Create Today's Story<br />Together",
        mockText: "Turn a child's imagination into a new story.",
        projectTitle: "AI-Powered Educational<br />Story App for Children",
        projectTitlePlain: "AI-Powered Educational Story App for Children",
        projectSummary: "I planned and built an AI-assisted educational story app for children. As team leader, I managed schedules and roles and participated in Kotlin app development.",
        projectRole: "Team Leader / Developer",
        projectResult: "Gold · Ministerial Award",
        projectFocus: "Planning · Development · Collaboration",
        projectDetail: "View Project Details →",
        videoButton: "Watch Demo Video ↓",
        videoHeading: "WonderTales Project Demo Video",
        videoText: "Watch the completed project in action through the final demonstration video.",
        experienceHeading: "What I learned from real work",
        experienceIntro: "My non-development work also gave me experience in accuracy, repeated inspection, and organizational communication.",
        qaPeriod: "3 months",
        qaTitle: "QA Part-time Role",
        qaSummary: "Service and feature testing, issue checking",
        qa1: "Performed service and feature testing",
        qa2: "Checked errors and abnormal behavior",
        qa3: "Worked with accuracy and attention to detail through repeated review",
        dwPeriod: "6 months",
        dwTitle: "Daewoong Pharmaceutical · Office Assistant",
        dwSummary: "Supported document organization and accurate data management",
        dw1: "Supported document and material organization",
        dw2: "Supported work through accurate data and document management",
        dw3: "Identified internal requests and provided operational support",
        whyHeading: "Development experience, QA discipline, and team leadership.",
        whyDev: "Java and Kotlin learning plus hands-on Kotlin application development",
        whyQa: "Issue-checking discipline built through repeated functional and defect testing",
        whyLead: "Experience coordinating roles and schedules and leading a project to completion",
        whyResult: "→ My goal is to grow into a backend developer who builds stable services and efficient systems.",
        resumeCtaTitle: "Want to see the full resume?",
        resumeCtaText: "Review my education, project, work experience, skills, and language qualification in one place.",
        resumeDetail2: "View Full Resume",
        pdfDownload: "Download PDF ↓",
        contactText: "I am open to opportunities to work together. Add the actual email and GitHub URL in the settings before deployment.",
        emailBtn: "Send Email",
        backHome: "← Back to Portfolio",
        projectDetailIntro: "In the 2023 Evewa Mentoring project, I served as team leader, refined the service idea, contributed to Kotlin app development, and managed the project process.",
        overviewTitle: "Project Overview",
        overviewText: "A project to plan and build an AI-powered educational story application for children.",
        roleTitle: "My Role",
        role1: "Managed schedules and team role allocation as project leader",
        role2: "Refined the service idea and managed project progress",
        role3: "Developed the application using Kotlin",
        processTitle: "Process",
        process1: "Refine Idea",
        process2: "Assign Roles",
        process3: "Kotlin Development",
        process4: "Complete & Award",
        problemTitle: "Problem & Solution",
        problemNote: "The current resume does not include a specific technical problem-and-solution story. Adding a real project retrospective here would make this one of the strongest hiring-focused sections.",
        resultTitle: "Result",
        resultText: "The project was recognized for its completeness and outcomes and received a Gold Award designated as a ministerial award.",
        learnedTitle: "What I Learned",
        learned1: "Hands-on application development experience",
        learned2: "Role coordination and schedule management",
        learned3: "Responsibility for leading a team through project completion",
        resumeLead: "Entry-level developer with Java and Kotlin development experience, project leadership, and QA/office support experience that strengthened my attention to detail and collaboration skills.",
        educationStatus: "Graduated, 4th year · GPA 3.9",
        projectResumeMeta: "2023 Evewa Mentoring · Team Leader · Gold Award (Ministerial Award)",
        careerGoal: "Building on my Java and Kotlin experience, I aim to continuously expand my backend skills and grow into a developer who creates stable services and efficient systems."
      },

      ja: {
        brand: "キム・ソヨン",
        name: "キム・ソヨン",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navExperience: "Experience",
        navContact: "Contact",
        resume: "履歴書",
        heroLine1: "小さな問題も丁寧に見つけ、",
        heroLine2: "最後まで解決します。",
        heroCopy: "Java・Kotlinの開発経験、QA業務で培った問題確認力、プロジェクトリーダー経験を活かし、安定したサービスを作るバックエンド開発者を目指しています。",
        viewProjects: "プロジェクトを見る",
        viewResume: "履歴書を見る",
        featuredTitle: "AIを活用した子ども向け<br />教育ストーリーアプリ",
        award: "🏆 金賞 · 長官賞",
        metricDev: "アプリケーション開発",
        metricLead: "日程 · 役割管理",
        aboutHeading: "どんな開発者ですか？",
        aboutIntro: "開発経験だけでなく、QAや事務補助の経験を通じて、正確さ・責任感・協働の基本を身につけました。",
        educationLabel: "学歴",
        educationValue: "培花女子大学 · コンピュータ工学科",
        gradeLabel: "成績",
        languageLabel: "語学",
        aboutCardTitle: "小さな問題も見逃さない開発者",
        aboutP1: "JavaとKotlinを学び、実際にKotlinベースのアプリケーション制作プロジェクトを経験しました。",
        aboutP2: "QA業務では機能やエラーを繰り返し確認し、正確かつ丁寧に問題を見つける習慣を身につけました。",
        aboutP3: "2023イーブワ・メンタリングではチームリーダーとして日程と役割を調整し、プロジェクトを完成させ、金賞（長官賞）を受賞しました。",
        resumeDetail: "履歴書を詳しく見る →",
        strengthHeading: "私の強み",
        strength1Title: "丁寧さ",
        strength1Text: "QA経験を通じて、エラーや異常を繰り返し確認する業務習慣を身につけました。",
        strength2Title: "責任感",
        strength2Text: "任された業務やプロジェクトを最後までやり切り、成果につなげる姿勢を大切にしています。",
        strength3Title: "協働",
        strength3Text: "チームメンバーと役割を調整し、共通の目標に向けて取り組んだ経験があります。",
        strength4Title: "リーダーシップ",
        strength4Text: "プロジェクトリーダーとして日程管理と役割分担を担当しました。",
        skillsHeading: "使用できる技術",
        skillsIntro: "実際の経験に基づく範囲で、現在のスキルを整理しています。",
        javaText: "基本文法およびプログラミング活用",
        kotlinText: "Kotlinを用いたアプリケーション開発経験",
        htmlText: "Webページの構造作成が可能",
        learningTitle: "Learning",
        learningText: "バックエンド開発スキルを継続的に学習中",
        projectHeading: "企画・開発したプロジェクト",
        projectIntro: "現在の履歴書で最も代表的なプロジェクトを中心に構成しています。",
        mockTitle: "子どもと一緒に作る<br />今日の物語",
        mockText: "子どもの想像力をもとに、新しい物語を作ってみましょう。",
        projectTitle: "AIを活用した子ども向け<br />教育ストーリーアプリ",
        projectTitlePlain: "AIを活用した子ども向け教育ストーリーアプリ",
        projectSummary: "AIを活用した子ども向け教育ストーリーアプリを企画・制作しました。チームリーダーとして日程と役割を管理し、Kotlinによるアプリ開発にも参加しました。",
        projectRole: "Team Leader / Developer",
        projectResult: "金賞 · 長官賞",
        projectFocus: "企画 · 開発 · 協働",
        projectDetail: "プロジェクト詳細 →",
        videoButton: "完成動画を見る ↓",
        videoHeading: "WonderTales プロジェクト完成動画",
        videoText: "完成したプロジェクトの実際の動作を動画で確認できます。",
        experienceHeading: "実務経験から学んだこと",
        experienceIntro: "開発以外の業務でも、正確さ、繰り返しの確認、組織内コミュニケーションを経験しました。",
        qaPeriod: "3か月",
        qaTitle: "QAアルバイト",
        qaSummary: "サービス・機能テスト、エラー・異常確認",
        qa1: "サービスおよび機能テストを実施",
        qa2: "エラーや異常事項を確認",
        qa3: "繰り返しの検証を通じて正確さと丁寧さを重視して業務を遂行",
        dwPeriod: "6か月",
        dwTitle: "大熊製薬 · 事務補助",
        dwSummary: "文書・資料整理および正確なデータ管理を支援",
        dw1: "文書・資料整理などの事務支援",
        dw2: "正確なデータおよび文書管理を通じた業務支援",
        dw3: "組織内の依頼事項を把握し、支援業務を実施",
        whyHeading: "開発経験に、QAの丁寧さとリーダー経験を加えました。",
        whyDev: "Java・Kotlinの学習とKotlinアプリケーション制作経験",
        whyQa: "機能とエラーを繰り返し確認する中で身につけた問題確認力",
        whyLead: "日程と役割を調整し、プロジェクト完成までチームを導いた経験",
        whyResult: "→ 安定したサービスと効率的なシステムを実装できるバックエンド開発者を目指しています。",
        resumeCtaTitle: "詳しい経歴をご覧になりますか？",
        resumeCtaText: "学歴・プロジェクト・実務経験・技術・資格情報を一画面で確認できます。",
        resumeDetail2: "履歴書を詳しく見る",
        pdfDownload: "PDFダウンロード ↓",
        contactText: "一緒に働く機会をお待ちしています。公開前に設定欄へ実際のメールアドレスとGitHub URLを入力してください。",
        emailBtn: "メールを送る",
        backHome: "← Portfolioへ戻る",
        projectDetailIntro: "2023イーブワ・メンタリングにチームリーダーとして参加し、サービスアイデアの具体化、Kotlinアプリ開発、プロジェクト進行管理を担当しました。",
        overviewTitle: "プロジェクト概要",
        overviewText: "AIを活用した子ども向け教育ストーリーアプリケーションを企画・制作したプロジェクトです。",
        roleTitle: "担当役割",
        role1: "チームリーダーとして日程管理およびメンバーの役割分担を担当",
        role2: "サービスアイデアの具体化およびプロジェクト進行管理",
        role3: "Kotlinを活用したアプリケーション開発",
        processTitle: "進行プロセス",
        process1: "アイデア具体化",
        process2: "役割分担",
        process3: "Kotlin開発",
        process4: "完成・受賞",
        problemTitle: "技術課題と解決",
        problemNote: "現在の履歴書には具体的な技術課題と解決過程が記載されていません。実際のプロジェクト振り返りを追加すると、採用視点で非常に強いセクションになります。",
        resultTitle: "プロジェクト結果",
        resultText: "プロジェクトの完成度と成果が認められ、金賞（長官賞）を受賞しました。",
        learnedTitle: "プロジェクトで得たこと",
        learned1: "実際のアプリケーション制作経験",
        learned2: "メンバーの役割調整と日程管理経験",
        learned3: "チームリーダーとして完成まで導いた責任感",
        resumeLead: "Java・Kotlinの開発経験、プロジェクトリーダー経験、QA・事務補助業務を通じて、丁寧な問題確認力と協働力を身につけた新卒開発者です。",
        educationStatus: "4年次卒業 · GPA 3.9",
        projectResumeMeta: "2023イーブワ・メンタリング · チームリーダー · 金賞（長官賞）",
        careerGoal: "JavaとKotlinの開発経験を基盤にバックエンド技術を継続的に伸ばし、安定したサービスと効率的なシステムを実装できるバックエンド開発者を目指しています。"
      }
    };

    let currentLang = localStorage.getItem("portfolioLang") || "ko";

    const toast = document.getElementById("toast");
    let toastTimer;

    function showToast(message) {
      toast.textContent = message;
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
    }

    function applyLanguage(lang) {
      currentLang = lang;
      localStorage.setItem("portfolioLang", lang);
      document.documentElement.lang = lang === "ja" ? "ja" : lang;

      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        const value = translations[lang]?.[key];
        if (value !== undefined) el.innerHTML = value;
      });

      document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
      });

      document.querySelectorAll(".profile-photo, .resume-profile-photo").forEach(img => {
        img.alt =
          lang === "ko" ? "김서영 증명사진" :
          lang === "en" ? "Portrait of Seoyeong Kim" :
          "キム・ソヨンの証明写真";
      });

      document.title =
        lang === "ko" ? "김서영 | Backend Developer" :
        lang === "en" ? "Seoyeong Kim | Backend Developer" :
        "キム・ソヨン | Backend Developer";
    }

    function closeMobileMenu() {
      document.getElementById("mobilePanel").classList.remove("open");
      document.getElementById("menuBtn").textContent = "☰";
    }

    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        applyLanguage(btn.dataset.lang);
        closeMobileMenu();
      });
    });

    document.getElementById("menuBtn").addEventListener("click", () => {
      const panel = document.getElementById("mobilePanel");
      panel.classList.toggle("open");
      document.getElementById("menuBtn").textContent = panel.classList.contains("open") ? "✕" : "☰";
    });

    document.querySelectorAll(".mobile-nav a, .mobile-actions a").forEach(link => {
      link.addEventListener("click", closeMobileMenu);
    });

    document.querySelectorAll(".js-github").forEach(btn => {
      btn.addEventListener("click", () => {
        if (SETTINGS.github) {
          window.open(SETTINGS.github, "_blank", "noopener,noreferrer");
        } else {
          showToast(
            currentLang === "ko" ? "GitHub 주소를 SETTINGS.github에 입력해주세요." :
            currentLang === "en" ? "Add your GitHub URL to SETTINGS.github." :
            "SETTINGS.github にGitHub URLを入力してください。"
          );
        }
      });
    });

    document.querySelectorAll(".js-email").forEach(btn => {
      btn.addEventListener("click", () => {
        if (SETTINGS.email) {
          window.location.href = `mailto:${SETTINGS.email}`;
        } else {
          showToast(
            currentLang === "ko" ? "이메일 주소를 SETTINGS.email에 입력해주세요." :
            currentLang === "en" ? "Add your email address to SETTINGS.email." :
            "SETTINGS.email にメールアドレスを入力してください。"
          );
        }
      });
    });

    document.querySelectorAll(".js-resume-download").forEach(btn => {
      btn.addEventListener("click", () => {
        if (SETTINGS.resumeUrl) {
          const a = document.createElement("a");
          a.href = SETTINGS.resumeUrl;
          a.download = "";
          a.click();
        } else {
          showToast(
            currentLang === "ko" ? "PDF 파일 경로를 SETTINGS.resumeUrl에 입력해주세요." :
            currentLang === "en" ? "Add the PDF path to SETTINGS.resumeUrl." :
            "SETTINGS.resumeUrl にPDFファイルのパスを入力してください。"
          );
        }
      });
    });

    function route() {
      const hash = location.hash || "#/home";
      const isProject = hash.startsWith("#/project");
      const isResume = hash.startsWith("#/resume");

      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));

      if (isProject) {
        document.getElementById("projectView").classList.add("active");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (isResume) {
        document.getElementById("resumeView").classList.add("active");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else {
        document.getElementById("homeView").classList.add("active");

        if (hash.startsWith("#/home")) {
          window.scrollTo({ top: 0, behavior: "instant" });
        }
      }

      closeMobileMenu();
    }

    window.addEventListener("hashchange", route);

    // HOME 내부 앵커가 SPA view 밖에서 호출되어도 정상 동작하도록 처리
    document.querySelectorAll('a[href^="#"]:not([href^="#/"])').forEach(anchor => {
      anchor.addEventListener("click", e => {
        const targetId = anchor.getAttribute("href").slice(1);
        const homeView = document.getElementById("homeView");

        if (!homeView.classList.contains("active")) {
          e.preventDefault();
          history.pushState(null, "", "#/home");
          document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
          homeView.classList.add("active");

          requestAnimationFrame(() => {
            document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
          });
        }
      });
    });


    const previewVideo = document.querySelector(".project-preview-video");
    if (previewVideo && "IntersectionObserver" in window) {
      const previewObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            previewVideo.play().catch(() => {});
          } else {
            previewVideo.pause();
          }
        });
      }, { threshold: 0.5 });
      previewObserver.observe(previewVideo);
    }

    applyLanguage(currentLang);
    route();
