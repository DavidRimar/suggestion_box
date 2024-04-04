import { useCallback, useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { useModals, MODALS } from './useModals';
import { AXIOS_METHOD, makeApiCall } from "./useApi";

function getLikedIdsFromSessionUser(sessionUser) {
    if (!sessionUser.likes) {
        return [];
    }

    return sessionUser.likes.map(e => e.id);
}

export default function useLike(suggestionId) {
    const { showModal } = useModals();
    const { sessionUser, authToken, setSessionUser } = useAuth();
    const likedIds = getLikedIdsFromSessionUser(sessionUser);
    const currentLiked = likedIds.includes(suggestionId);
    const [isLiked, setIsLiked] = useState(currentLiked);

    // handle like change
    useEffect(() => {
        setIsLiked(currentLiked);
    }, [suggestionId, currentLiked]);

    // show LoginModal if user is not logged in (onLikeChange)
    // otherwise, like/unlike with axios

    const onLikeChange = useCallback((onSuccessChange = false) => {
        
        if (authToken === false) {
            showModal(MODALS.LOGIN);
            return;
        }

        makeApiCall(AXIOS_METHOD.POST, isLiked ? '/unlike' : '/like',
            (newUserData) => {
                // success
                setSessionUser(newUserData);
                if (onSuccessChange !== false) {
                    onSuccessChange();
                }
            }, () => {
                // error
                setIsLiked(isLiked);
                showModal(MODALS.ERROR, {message: 'Like/Unlike failed!'});
            }, {id: suggestionId});
        
        setIsLiked(oldLike => !oldLike);
    }, [authToken, isLiked, setSessionUser, setIsLiked, showModal]);

    return [isLiked, onLikeChange];
}