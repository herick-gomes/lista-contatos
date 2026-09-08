import * as S from './styles'

export type ToastType = 'success' | 'danger'

type Props = {
    message: string
    type?: ToastType
    onClose: () => void
}

const Toast = ({
    message,
    type = 'success',
    onClose
}: Props) => {
    return (
        <S.Container
            $type={type}
            role="status"
            aria-live="polite"
        >
            <S.Icon $type={type}>
                {type === 'success' ? (
                    <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                    >
                        <path
                            d="M5 12.5l4 4L19 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                ) : (
                    <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                    >
                        <path
                            d="M7 7l10 10M17 7L7 17"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />
                    </svg>
                )}
            </S.Icon>

            <S.Content>
                <S.Label>
                    {type === 'success' ? 'Success' : 'Contact removed'}
                </S.Label>

                <S.Message>{message}</S.Message>
            </S.Content>

            <S.CloseButton
                type="button"
                onClick={onClose}
                aria-label="Close notification"
            >
                ×
            </S.CloseButton>

            <S.Progress $type={type} />
        </S.Container>
    )
}

export default Toast