import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as ArticleCodeEcsServiceAutoScaling2 from '../lib/article-code-ecs-service-auto-scaling-2-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new ArticleCodeEcsServiceAutoScaling2.ArticleCodeEcsServiceAutoScaling2Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
