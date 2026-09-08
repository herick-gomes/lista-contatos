import Formulario from '../../containers/Formulario'

import * as S from './styles'

const Cadastro = () => {
    return (
        <S.Page>
            <S.BackgroundGlowOne />
            <S.BackgroundGlowTwo />

            <S.Container>
                <S.SideContent>
                    <S.Brand to="/">
                        <S.BrandMark>CM</S.BrandMark>

                        <S.BrandText>
                            <strong>Contact Manager</strong>
                            <span>Personal workspace</span>
                        </S.BrandText>
                    </S.Brand>

                    <S.SideMain>
                        <S.Eyebrow>NEW CONNECTION</S.Eyebrow>

                        <S.SideTitle>
                            Add someone to
                            <span> your network.</span>
                        </S.SideTitle>

                        <S.SideDescription>
                            Save essential contact information in one organized,
                            private and easy-to-access workspace.
                        </S.SideDescription>

                        <S.FeatureList>
                            <S.Feature>
                                <S.FeatureIcon>
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="18"
                                        height="18"
                                        fill="none"
                                    >
                                        <path
                                            d="M12 3l7 3v5c0 4.6-2.9 8.2-7 10-4.1-1.8-7-5.4-7-10V6l7-3z"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinejoin="round"
                                        />

                                        <path
                                            d="M9 12l2 2 4-4"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </S.FeatureIcon>

                                <div>
                                    <strong>Duplicate protection</strong>
                                    <span>
                                        Names, emails and phone numbers are checked before saving.
                                    </span>
                                </div>
                            </S.Feature>

                            <S.Feature>
                                <S.FeatureIcon>
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="18"
                                        height="18"
                                        fill="none"
                                    >
                                        <path
                                            d="M5 12h14M12 5v14"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </S.FeatureIcon>

                                <div>
                                    <strong>Smart formatting</strong>
                                    <span>
                                        Contact details are normalized automatically while you type.
                                    </span>
                                </div>
                            </S.Feature>

                            <S.Feature>
                                <S.FeatureIcon>
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="18"
                                        height="18"
                                        fill="none"
                                    >
                                        <rect
                                            x="4"
                                            y="4"
                                            width="16"
                                            height="16"
                                            rx="4"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                        />

                                        <path
                                            d="M8 12h8M8 8h5M8 16h6"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </S.FeatureIcon>

                                <div>
                                    <strong>Local persistence</strong>
                                    <span>
                                        Your contacts remain available after refreshing the page.
                                    </span>
                                </div>
                            </S.Feature>
                        </S.FeatureList>
                    </S.SideMain>

                    <S.SideFooter>
                        <S.StatusDot />
                        Data stored locally on this device
                    </S.SideFooter>
                </S.SideContent>

                <S.FormSection>
                    <S.FormCard>
                        <S.FormHeader>
                            <S.BackLink to="/">
                                <span>←</span>
                                Back to contacts
                            </S.BackLink>

                            <S.FormIcon>
                                <svg
                                    viewBox="0 0 24 24"
                                    width="22"
                                    height="22"
                                    fill="none"
                                >
                                    <circle
                                        cx="9"
                                        cy="8"
                                        r="4"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                    />

                                    <path
                                        d="M3.5 20c.5-4 2.5-6 5.5-6s5 2 5.5 6"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                    />

                                    <path
                                        d="M18 8v6M15 11h6"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </S.FormIcon>

                            <S.FormEyebrow>
                                CONTACT PROFILE
                            </S.FormEyebrow>

                            <S.Title>
                                Create a new contact
                            </S.Title>

                            <S.Subtitle>
                                Add their essential information below. We will validate and
                                format everything before saving.
                            </S.Subtitle>
                        </S.FormHeader>

                        <S.Divider />

                        <Formulario />

                        <S.PrivacyNote>
                            <S.PrivacyIcon>◎</S.PrivacyIcon>

                            <span>
                                This project stores contact data locally in your browser.
                            </span>
                        </S.PrivacyNote>
                    </S.FormCard>
                </S.FormSection>
            </S.Container>
        </S.Page>
    )
}

export default Cadastro