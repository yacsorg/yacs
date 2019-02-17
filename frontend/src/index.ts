import { replyAction } from './elements/action';
import { allComments } from './elements/all-comments';
import { comment } from './elements/comment';
import { reply, submitButton } from './elements/reply';
import { handleReplyClick } from './listeners/reply-action';
import { Sanitizer } from './elements/sanitize';

const main = allComments({
    count: 3,
    children: [
        comment({
            author: 'Daphne Liu',
            metadata: 'Today at 4:30pm',
            actions: replyAction({}),
            text: 'Hello World!',
            children: comment({
                author: 'Tiger Oakes',
                metadata: 'Today at 5:30pm',
                actions: replyAction({}),
                text: 'Hello gal!',
            }),
        }),
        comment({
            author: 'Em',
            text: 'Welcome to YACS.',
            metadata: 'Today at 5:00pm',
            avatar: 'https://www.thispersondoesnotexist.com/',
            actions: replyAction({}),
        }),
        reply({
            action: '',
            children: submitButton({}),
        }),
    ],
});
main.addEventListener(
    'click',
    handleReplyClick({ action: '', submit: () => submitButton({}) }),
);

document.body.appendChild(main);

document.body.appendChild(
    new Sanitizer().sanitize(
        `<img alt="Safety" onload="alert('Break things')">`,
    ),
);
