import { useCallback, useEffect, useState } from 'react';
import { AXIOS_METHOD, makeApiCall } from './useApi';


export default function useSuggestions(author = "", limit = 5) {
    const [cursor, setCursor] = useState("");
    const [suggestions, setSuggestions] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const apiCallback = useCallback((newCursor) => {
        setLoading(true);
        makeApiCall(AXIOS_METHOD.POST, '/suggestions', (responseData) => {
            setSuggestions(oldSuggestions => {
                if (oldSuggestions === false || newCursor === "") {
                    return responseData?.suggestions;
                }
                return {...oldSuggestions, ...responseData?.suggestions}
            });
            setCursor(responseData?.cursor);
            setError(false);
            setLoading(false);
        }, (errorMessage) => {
            setError(errorMessage);
            setSuggestions(false);
            setCursor("");
            setLoading(false);
        }, {
            author,
            limit,
            cursor: newCursor
        });
    }, [setSuggestions, setError, setLoading, author, limit]);

    useEffect(() => {
        apiCallback("");
    }, [apiCallback]);

    const onLoadMore = useCallback(() => {
        apiCallback(cursor);
    }, [apiCallback, cursor]);
    
    return [suggestions, loading, error, onLoadMore, apiCallback];
}