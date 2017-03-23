import assert from 'assert';
import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../src/components/app';
import User from '../../server/api/user/user.model';
import Policy from '../../server/api/policy/policy.model';

describe("Users controller", () => {
    it('Post to /users creats a new user and policy', (done) => {
        // User.
    })
})